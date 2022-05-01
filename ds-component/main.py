from sklearn.preprocessing import LabelEncoder
from keras.utils.np_utils import to_categorical
from keras.models import Sequential
from keras.models import load_model
from keras.layers import Dense
from matplotlib import pyplot
import csv
import numpy as np
from flask import Flask, request
import json
import ast


def prepare_data(model_type):  # pre-processing step for data preparation
    # https://www.tutorialspoint.com/machine_learning_with_python/machine_learning_with_python_preparing_data.htm#:~:text=Another%20useful%20data%20preprocessing%20technique,of%20scikit%2Dlearn%20Python%20library.
    print("Started data preparation...........")
    csvFile = open('responses.csv', 'r')  # opening csv file
    features = csv.reader(csvFile, delimiter=',')
    y = []  # initializing y list for prediction data
    x = []  # initializing x list for data
    for line in features:
        if (model_type == "Learning-Style"):  # adding values to learning model
            x.append(line[4:14])  # 4th column to 14th will add to learning model
            y.append(line[-2])  # 25th column will add as user's opinion
        else:
            x.append(line[14:24])  # 14th column to 24th will add to personal model
            y.append(line[-1])  # 26th column will add as user's opinion

    le = LabelEncoder()  # https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelEncoder.html
    encoded_Y = le.fit_transform(y)  # fit label encoder to y list
    y = to_categorical(encoded_Y)

    list_x = np.array(x)
    x = list_x.astype(np.int)  # converting x values in to integers https://stackoverflow.com/questions/3877209/how-to-convert-an-array-of-strings-to-an-array-of-floats-in-numpy

    n_train = round(len(y) * 0.67)  # 2/3 of data using to training model
    # initialising tarinX, testX, testY, testY
    trainy = []
    testy = []
    trainX = []
    testX = []

    for line in y:
        if len(trainy) < n_train:
            trainy.append(line)  # appending values into tarinY
        else:
            testy.append(line)  # appending values into testY

    for line in x:
        if len(trainX) < n_train:
            trainX.append(line)  # appending values into tarinX
        else:
            testX.append(line)  # appending values into testX

    trainX = np.array(trainX)   # https://numpy.org/doc/stable/reference/generated/numpy.array.html
    testX = np.array(testX)
    trainy = np.array(trainy)
    testy = np.array(testy)
    print("Finished data preparation...........")
    return trainX, trainy, testX, testy, le

# https://keras.io/guides/sequential_model/
def learning_model(trainX, trainy, testX, testy):
    model = Sequential()    # https://www.tensorflow.org/api_docs/python/tf/keras/Sequential
    model.add(Dense(100, input_dim=10, activation='relu'))
    model.add(Dense(24, activation='relu'))  # https://machinelearningmastery.com/rectified-linear-activation-function-for-deep-learning-neural-networks/
    model.add(Dense(4, activation='softmax'))
    model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])  # https://www.tutorialspoint.com/keras/keras_model_compilation.htm
    print(model.summary())
    history = model.fit(trainX, trainy, validation_data=(testX, testy), batch_size=1, epochs=100, verbose=1)

    pyplot.plot(history.history['accuracy'], label='train')  # https://matplotlib.org/3.1.1/api/_as_gen/matplotlib.pyplot.html#:~:text=pyplot%20is%20a%20state%2Dbased,%2C%200.1)%20y%20%3D%20np.
    pyplot.plot(history.history['val_accuracy'], label='test')  # https://www.geeksforgeeks.org/pyplot-in-matplotlib/
    pyplot.show()
    scores = model.evaluate(trainX, trainy, verbose=1)
    print("%s: %.2f%%" % (model.metrics_names[1], scores[1] * 100))
    model.save("learning_model.h5")
    print("Model saved to disk")

#https://keras.io/guides/sequential_model/
def personality_model(trainX, trainy, testX, testy):
    model = Sequential()    # https://www.tensorflow.org/api_docs/python/tf/keras/Sequential
    model.add(Dense(100, input_dim=10, activation='relu'))
    model.add(Dense(50, activation='relu'))  # https://machinelearningmastery.com/rectified-linear-activation-function-for-deep-learning-neural-networks/
    model.add(Dense(20, activation='relu'))
    model.add(Dense(5, activation='softmax'))
    model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])  # https://www.tutorialspoint.com/keras/keras_model_compilation.htm
    print(model.summary())
    history = model.fit(trainX, trainy, validation_data=(testX, testy), batch_size=1, epochs=100, verbose=1)

    pyplot.plot(history.history['accuracy'], label='train')  # https://matplotlib.org/3.1.1/api/_as_gen/matplotlib.pyplot.html#:~:text=pyplot%20is%20a%20state%2Dbased,%2C%200.1)%20y%20%3D%20np.
    pyplot.plot(history.history['val_accuracy'], label='test')  # https://www.geeksforgeeks.org/pyplot-in-matplotlib/
    pyplot.show()
    scores = model.evaluate(trainX, trainy, verbose=1)
    print("%s: %.2f%%" % (model.metrics_names[1], scores[1] * 100))
    model.save("personality_model.h5")
    print("Model saved to disk")


def predict_model(model_type, input_data, le):
    model = load_model(model_type + '.h5')  # saving models to .h5 file
    print(model.summary())
    test_input = np.reshape(input_data, (1, 10))  # reshaping by  numpy
    test_output = model.predict(test_input, verbose=1)  # predicting output
    output_data = np.argmax(test_output, 1)  # storing output in numpy argmax
    output_class = le.inverse_transform(output_data)  # changing output into label encoders requirement
    return output_class[0]


if __name__ == "__main__":
    app = Flask(__name__)  # https://www.fullstackpython.com/flask.html


    # for model training comment new_input_array and predict_model fields
    # for model prediction comment each model
    @app.route('/learn')  # https://www.geeksforgeeks.org/flask-app-routing/#:~:text=App%20Routing%20means%20mapping%20the,associated%20with%20the%20root%20URL.
    def learningFunction():
        input_list = request.args
        jsonInput = json.dumps(input_list)  # https://www.machinelearningplus.com/python-json-guide/
        my_dict = ast.literal_eval(jsonInput)
        input_array = []  # input
        for i in range(10):
            input_array.append(int(my_dict[str(i)]))
        trainX, trainy, testX, testy, le = prepare_data("Learning-Style")  # calling train and test data
        # learning_model(trainX, trainy, testX, testy)
        predicted_output = predict_model("learning_model", input_array, le)  # predicting the output and converting to string
        return predicted_output


    @app.route('/persona')  # https://www.geeksforgeeks.org/flask-app-routing/#:~:text=App%20Routing%20means%20mapping%20the,associated%20with%20the%20root%20URL.
    def personaFunction():
        input_list = request.args
        jsonInput = json.dumps(input_list)
        my_dict = ast.literal_eval(jsonInput)  # https://www.machinelearningplus.com/python-json-guide/
        input_array = []
        for i in range(10):
            input_array.append(int(my_dict[str(i)]))
        trainX, trainy, testX, testy, le = prepare_data("Personality-Trait")  # calling train and test data
        # personality_model(trainX, trainy, testX, testy)
        predicted_output = predict_model("personality_model", input_array, le)  # predicting the output and converting to string
        return predicted_output


    app.run(host='0.0.0.0', port=5000, debug=True)  # https://www.codegrepper.com/code-examples/python/app.run%28host%3D%270.0.0.0%27+port%3D5000+debug%3Dtrue%29
