const User = require("../models/user.model");
var request = require('request');

// Create and Save a new user
exports.create = (req, res) => {
    // Validate request
    if (!req.body.fname) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    if (!req.body.username) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;    
    }
    if (!req.body.password) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;    
    }
    if (!req.body.course) {
        res.status(400).send({ message: "Please select the course you are following" });
        return;    
    }
    // Create a user
    var user = new User({
        fname: req.body.fname,
        gender: req.body.gender,
        username: req.body.username,
        password: req.body.password,
        course: req.body.course,
        is_teacher: req.body.is_teacher
    });
    // Save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the user."
            });
        });
};

exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    var condition = { username: username, password: password };
    User.find(condition)
        .then(data => {
            if(data.length == 0){
                res.status(404).send({
                    message: "User not found"
                });
            }else{
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred"
            });
        });
};

exports.findByCourse = (req, res) => {
    const course = decodeURI(req.query.course);
    var condition = { course: course,is_teacher : false };
    User.find(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving users."
            });
        });
};

exports.findById = (req, res) => {
    const id = req.query.id;
    User.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "User not found with id " + id });
            else res.send(data);
        })
        .catch(err => {
            res
                .status(500)
                .send({ message: "Error retrieving User with id=" + id });
        });
};

exports.getUserAnswers = (req, res) => {
    var id = req.query.userId;
    User.findById(id)
        .populate('answers')
        .then((result) => {
            res.json(result);
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

exports.getLstyle = (req, res) => {
    var id = req.query.userId;
    User.findById(id)
        .populate('answers')
        .then((result) => {
            answerArray = result.answers;
            answerArray.forEach(element => {
                if (element.is_learning == true) {
                    dataToSend = element.answers;
                }
            });
            if (dataToSend.length == 0) {
                res.send({ message: "Empty response!" });
            } else {
                var url = 'http://34.136.94.138:5000/learn'
                request({
                    url: url,
                    qs: dataToSend.join('')
                }, function (error, response, body) {
                    if (error) {
                        res.json({'error:': error});

                    } else if (response && body) {
                        res.json({ 'learning_style': body });
                    }
                })
            }
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

exports.getPersonality = (req, res) => {
    var id = req.query.userId;
    User.findById(id)
        .populate('answers')
        .then((result) => {
            answerArray = result.answers;
            dataToSend = [];
            answerArray.forEach(element => {
                if (element.is_learning == false) {
                    dataToSend = element.answers;
                }
            });
            if (dataToSend.length == 0) {
                res.send({ message: "Empty response!" });
            } else {
                var url = 'http://34.136.94.138:5000/persona'
                request({
                    url: url,
                    qs: dataToSend.join('')
                }, function (error, response, body) {
                    if (error) {
                        res.json({'error:': error});

                    } else if (response && body) {
                        res.json({ 'personality_trait': body });
                    }
                })
            }
        })
        .catch((error) => {
            res.status(500).json({ error });
        });
};

exports.updateById = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty!"
        });
    }
    const id = req.query.id;
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update User with id=${id}. Maybe User was not found!`
                });
            } else res.send({ message: "User updated successfully." });
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating User with id=" + id
            });
        });
};

exports.deleteById = (req, res) => {
    const id = req.query.id;
    User.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete User with id=${id}. Maybe User was not found!`
                });
            } else {
                res.send({
                    message: "User deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete User with id=" + id
            });
        });
};