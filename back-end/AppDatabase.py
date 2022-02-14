class AppDatabase:

    __users = [] #Holds users

    def __init__(self):
        pass

    def createusers(self , userName , email , password):
        user = User(userName , email , password)
        self.__users.append( user )

    def findAccount(self, id):
        for user in self.__users:
            account = user.findAccount(id)
            if account is not None:
                return account
        return None

    def getUser(self, userName):
        found = False
        for user in self.__users:
            if user.userName.lower() == userName.lower():
                found = True
                return user
        if not found:
            raise Exception("User Does not exist")