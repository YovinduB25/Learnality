// https://github.com/hariom282538/NodeJS-CRUD/tree/master/app/routes

module.exports = app => {
    const users = require("../controllers/user.controller");
    var router = require("express").Router();

    //create user
    router.post("/create", users.create);
    //login user (student)
    router.post("/studentLogin", users.studentLogin);
    //login user (teacher)
    router.post("/teacherLogin", users.teacherLogin);
    // Retrieve a single user by id
    router.get("/find", users.findById);
    // Update a user by id
    router.put("/update", users.updateById);
    // Delete a user by id
    router.delete("/delete", users.deleteById);
    // Retrieve teacher dashboard data
    router.get("/getDashboard", users.getDashboard);
    // Retrieve learning Style of single user
    router.get("/getLstyle", users.getLstyle);
    // Retrieve personality trait of single user
    router.get("/getPersonality", users.getPersonality);
    
    app.use('/api/user', router);
};