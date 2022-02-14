import time

class attemptQuiz:

    def __init__(self):
        self.startTime = 0
        self.endTime = 0
        self.duration = 0

        self.questionNumber = 0

        self.confirmed = False
        self.completed = False

    def confirm(self):
        self.confirmed = True
        self.startTime = time.time()
        self.endTime = self.startTime + self.duration
        print("Start time :", self.startTime, "/ endTime : ", self.endTime)