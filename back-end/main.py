import re


class Main:
    def login(self):
        return

    def signUp(self):
        return

    def signUpAccount(seelf):
        return

    def passwordValidate(self, password):

        if (len(password) > 8 and any(elem.isdigit()) for elem in password):
            passwordStatus = "true"

        else:
            passwordStatus = "false"

    def username(self):
        return

    def getAccount(self):
        return

    def getSignUp(self):
        return

    def authenticate(self):
        return

    def getIntInput(self, message):
        number = input(message)
        try:
            number = int(number)
            return number
        except ValueError:
            print(number + " is not a Number!")
            return False

    def getLabeledDict(self, labels, data):
        if (len(labels) != len(data)):
            raise Exception("Non-equal quantity of Labels and Data")
        newDict = {}
        for x in range(len(labels)):
            newDict[str(labels[x])] = data[x]
        return newDict
