
const Task=require("../models/task");


/*Action for the route / */
module.exports.home=function(req,res){
    Task.find({},function(err,tasks){
        if(err)
        {
            console.log(`Error in fetching the tasks!!`);
            return;
        }
        return res.render("home",{
            tasks:tasks
        });

    })
}



/*Action for the route /addTask */
module.exports.addTask=function(req,res){
    
    let new_task=new Task({
        Description:req.body.Description,
        Category:req.body.Category,
        Due_date:req.body.Due_date,
        Day:req.body.Due_date.slice(0,2),
        Month:req.body.Due_date.slice(3,5),
        Year:req.body.Due_date.slice(6)
    });


    new_task.save(function(err,obj){
        if(err)
        {
            console.log(`Error in creating the new task!!`);
            return;
        }
        return res.redirect("back");
    })
}



/*Action for the route /deleteTasks */
module.exports.deleteTasks=function(req,res){

        Task.deleteMany({_id: {$in:req.query.id_arr}  },function(err){
            if(err)
            {
                console.log("Error in deleting the tasks!!");
                return;
            }
            res.redirect("back");
        })
   

}





