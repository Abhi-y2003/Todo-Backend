//import schema

const Todo = require("../models/todo");
 
//define route handler


//async function because main thread block nhi hona chahiye data add jo bhe hoga database me sab delay ho jayega or main thread chalta rahega

exports.createTodo = async(req, res)=>{
    try{
        //extracting title and descrption from request ke body
        const {title,description} =req.body;

        //create a new todo object and insert in the db
        const response = await Todo.create({title,description});

        //send a json response with a success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"entry created successfully"

            }
        )
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:error.message,
        })


    }

}