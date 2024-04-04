const express = require("express");
 
const router = express.Router();

//import controller
const {createTodo} = require("../controller/createTodo");

//definr api routes
router.post("/createTodo", createTodo);


module.exports = router;