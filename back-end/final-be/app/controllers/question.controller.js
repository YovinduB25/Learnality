const StoreAnswers = require("../models/question.model");
const User = require("../models/user.model");

exports.store = (req, res) => {
    var newRequest = new StoreAnswers();
    newRequest.userId = req.body.userId;
    newRequest.answers = req.body.answers;
    newRequest.is_learning = req.body.is_learning;
    newRequest.save()
      .then((result) => {
        User.findById(newRequest.userId, (err, user) => {
            if (user) {
                // The below two lines will add the newly saved answer request
                user.answers.push(newRequest);
                user.save();
                res.json({ message: 'Answer stored!' });
            }
        });
      })
      .catch((error) => {
        res.status(500).json({ error });
      });
};