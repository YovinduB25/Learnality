module.exports = app => {
    const questions = require("../controllers/question.controller");
    var router = require("express").Router();

    //Store answers in the database
    router.post("/storeAnswers", questions.store);

    app.use('/api/question', router);
};