from sklearn.preprocessing import LabelEncoder
from keras.utils.np_utils import to_categorical
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
    print(trainX)
    print("Finished data preparation...........")
    return trainX, trainy, testX, testy, le

if __name__ == "__main__":
    trainX, trainy, testX, testy, le = prepare_data("Learning-Style")
    #model train
    #trainX, trainy, testX, testy, le = prepare_data("Personality-Trait")

