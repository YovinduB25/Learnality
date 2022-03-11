from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder
from keras.utils.np_utils import to_categorical
from keras.models import Sequential
from keras.layers import Dense
from matplotlib import pyplot
import csv
import numpy as np

def prepare_data(model_type):
    print("Started data preparation...........")
    csvFile = open('responses.csv', 'r')
    features = csv.reader(csvFile, delimiter=',')
    y = []
    x = []
    for line in features:
        if(model_type == "Learning-Style" ):
            x.append(line[4:14])
            y.append(line[-2])
        else:
            x.append(line[14:24])
            y.append(line[-1])

    le = LabelEncoder()
    encoded_Y = le.fit_transform(y)
    y = to_categorical(encoded_Y)

    list_x = np.array(x)
    x = list_x.astype(np.int)

    n_train = round(len(y)*0.67)
    trainy = []
    testy = []
    trainX = []
    testX = []

    for line in y:
        if len(trainy) < n_train:
            trainy.append(line)
        else:
            testy.append(line)

    for line in x:
        if len(trainX) < n_train:
            trainX.append(line)
        else:
            testX.append(line)

    trainX = np.array(trainX)
    testX = np.array(testX)
    trainy = np.array(trainy)
    testy = np.array(testy)
    print("Finished data preparation...........")
    return trainX, trainy, testX, testy, le

def learning_model(trainX, trainy, testX, testy):
    model = Sequential()
    model.add(Dense(12, input_dim=10, activation='relu'))
    model.add(Dense(8, activation='relu'))
    model.add(Dense(4, activation='softmax'))
    model.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])
    print(model.summary())
    history = model.fit(trainX, trainy, validation_data=(testX, testy),batch_size=1, epochs=200, verbose=1)

    pyplot.plot(history.history['accuracy'], label='train')
    pyplot.plot(history.history['val_accuracy'], label='test')
    scores = model.evaluate(trainX, trainy, verbose=1)
    print("%s: %.2f%%" % (model.metrics_names[1], scores[1] * 100))
    model.save("model.h5")
    print("Model saved to disk")

if __name__ == "__main__":
    trainX, trainy, testX, testy, le = prepare_data("Learning-Style")
    #trainX, trainy, testX, testy, le = prepare_data("Personality-Trait")
    learning_model(trainX, trainy, testX, testy)


