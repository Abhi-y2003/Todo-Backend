const todo = require("../models/todo");
const Todo = require("../models/todo")

exports.deleteTodo = async(req,res)=>{

    try{
       
        const { id } = req.params;
        
        await Todo.findByIdAndDelete(id);

        res.json({
             success:true,
             essage:"Todo Deleted" 
             
        })

    }

    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            message:"issue on sever side"
        });

    }
}