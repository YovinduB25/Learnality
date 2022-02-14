class User:
    __accounts = []  # Holds a list of accounts 

    def __init__(self , userName , email , password):
        self.__database = Database(userName)
        self.userName = userName

    def createAccount(self, accountId, firstName, lastName, accountType, email, password):
        # The Account details must be validated at Sign Up class, before entering this point.
        newUser = Account(accountId, firstName, lastName, accountType, email, password)
        self.__accounts.append(newUser)

    def displayAccounts(self):
        # for console
        for account in self.__accounts:
            print(account.toString())

    def findAccount(self, id):
        for account in self.__accounts:
            if account.getCredentials()[0] == id:
                return account
        return None