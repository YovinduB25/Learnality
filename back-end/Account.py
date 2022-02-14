class Account:

    __email = ""
    __password = ""

    def __init__(self, accountId, firstName, lastName, accountType, email , password):
        self.__accountId = accountId
        self.__firstName = firstName
        self.__lastName = lastName
        self.__accountType = accountType
        self.__email = email
        self.__password = password
        
    def getCredentials(self):
        #Gets credentials needed for authorising a login
        return [self.__accountId, self.__email , self.__password]

    def addData(self):
        #adding monthly Data to database
        return

    def addAllData(self):
        #adding multiple months of data into database
        return
    
    def toString(self):
        return "Account [account id : %s , firstName : %s , lastName : %s , accountType : %s , email : %s , password : %s]" % (self.__accountId, self.__firstName, self.__lastName, self.__accountType, self.__email , self.__password)