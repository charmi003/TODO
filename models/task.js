const mongoose=require("mongoose");

const taskSchema=new mongoose.Schema({
    Description:{
        type:String
    },
    Category:{
        type:String
    },
    Due_date:{
        type:String
    },
    Day:{
        type:String
    },
    Month:{
        type:String
    },
    Year:{
        type:String
    }
});



// A model is a class with which we construct documents. In this case, each document will be a task
// with the properties and behaviour as declared in our taskSchema
const Task=mongoose.model("Task",taskSchema);

module.exports=Task;