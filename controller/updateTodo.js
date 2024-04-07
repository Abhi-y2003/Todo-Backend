const Todo = require("../models/todo");

exports.updateTodo = async(req,res)=>{

    try{
        //fetching id 
        const {id} = req.params;
        const {title, description} = req.body;

        const todo =await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt: Date.now()},
        );

        res.status(200)
        .json({
            success:true,
            data:todo,
            message:'Data updated successfully'
        })

    }
    
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            message:error.message,
        })
    }
}
