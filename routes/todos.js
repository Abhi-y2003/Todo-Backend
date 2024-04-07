const express = require("express");
 
const router = express.Router();

//import controller
const {createTodo} = require("../controller/createTodo");
const {getTodo, getTodoById} = require("../controller/getTodo");
const {updateTodo} = require("../controller/updateTodo");


//definr api routes
//      this api url   is    mapped with this 
router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getTodoById);
router.get("/updateTodo/:id", updateTodo);


module.exports = router;