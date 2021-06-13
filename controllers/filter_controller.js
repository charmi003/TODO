const { Error } = require("mongoose");
const Task = require("../models/task");

/*Finding today's date in dd/mm/yyyy format */
var date = new Date();
var day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

month = (month < 10 ? "0" : "") + month;
day = (day < 10 ? "0" : "") + day;

var today_date = day + "/" + month + "/" + year;



/*Action for the route /filter/overdue */
module.exports.overdue=function(req,res){

    Task.find({
        Due_date:{$ne:""},
        $or:[
            { Year:{$lt:year} },

            { Year:{$eq:year}, Month:{$lt:month} },

            { Year:{$eq:year}, Month:{$eq:month}, Day:{$lt:day}}
        ]

    } , function(err,tasks){
        if(err)
        {
            console.log(`Error in finding the tasks!! ${err}`);
            return;
        }
        return res.render("filter",{
            tasks:tasks,
            query_name:"overdue"
        })
    })

}




/*Action for the route /filter/today */
module.exports.today=function(req,res){

    Task.find({Due_date:today_date},function(err,tasks){
        if(err)
        {
            console.log(`Error in finding the tasks!! ${err}`);
            return;
        }
        return res.render("filter",{
            tasks:tasks,
            query_name:"today"
        })
    })
    
}




/*Action for the route /filter/date */
module.exports.date=function(req,res){

    return res.render("filter",{
        tasks:[],
        query_name:"date"
    })
    
}




/*Action for the route /filter/month */
module.exports.month=function(req,res){

    return res.render("filter",{
        tasks:[],
        query_name:"month"
    })
    
}



/*Action for the route /filter/results/:query_name */
module.exports.results=function(req,res){

    let q=req.params.query_name,find_obj;
    
    if(q=="date")
    {
        find_obj={ Due_date:req.query.Date };
    }
    else if(q=="month")
    {
        //req.query.Month="2021/07" example
        let y=req.query.Month.slice(0,4);
        let m=req.query.Month.slice(5);
        find_obj={ Month:m, Year:y };
        
    }


    Task.find(find_obj,null,{ sort:{Due_date:1} },function(err,tasks){
        if(err)
        {
            console.log(`Error in finding the tasks!! ${err}`);
            return;
        }
        return res.render("filter",{
            tasks:tasks,
            query_name:""
        })
    })
}