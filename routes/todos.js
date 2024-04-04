const express = require("espress");
 
const router = express.router();

//import controller
const {createTodo} = require("../controller/createTodo");

//definr api routes
router.post("/createTodo", createTodo);


module.exports = router;