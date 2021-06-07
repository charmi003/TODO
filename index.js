//Setting up the express app
const express=require("express");
const port=5000;
const app=express();

//sending all the requests with root as / to routes/index.js
app.use("/",require("./routes/index"));


//set up the view engine ejs
app.set("view engine","ejs");    //setting the view engine
app.set("views","./views");      //setting the view path


//Firing the express app
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in firing up the server: ${err}`);
        return;
    }
    console.log(`To-Do-App is running absolutely fine on port: ${port}`);
})
