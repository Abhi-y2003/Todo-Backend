const Todo = require("../models/todo");

exports.getTodo = async (req,res)=>{

    try{
        //fetching all todos from database
        const todos = await Todo.find({});

        //response updation
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Data is fetched"
        })
    }
    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            data:error.message,
            message:'Internal server Error',
        });

    }
}


exports.getTodoById = async(req, res) => {

    try{

        //extracting todos items basis on id 
        const id  = req.params.id;
        const todo = await Todo.findById({_id: id});

        //data for given id is not found 
        if(!todo){
            return res.status(404)
            .json({
                success:false,
                message:"no data found",
            })
        }

        //data for given id found 
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`Todo ${id} data successfully fetched`,
        })
    }

    catch(error){
        console.error(error);
        res.status(500)
        .json({
            success:false,
            data:error.message,
            message:'Internal server Error',
        });
    }
}