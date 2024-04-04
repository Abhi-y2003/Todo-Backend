const express = require('express');

const app = express();

//load config from env file
require("dotenv").config();
const PORT =process.env.PORT || 4000; 

//middle ware to parser json req body
app.use(express.json());

//import routes for todo api
const todoRoutes = require("./routes/todos");

//mounting the api routes
app.use("/api/v1", todoRoutes); 

//starting server 
app.listen(PORT , ()=>{
    console.log(`SERVER STARTED SUCCESSFULLY ${PORT}`);
})

//connecting to the database
const dbConnect = require("./config/database");
dbConnect();

//default route
app.get("/", (req,res)=>{
    res.send(`<h1>This is Home page BITCH </h1>`);
})
