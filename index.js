//Setting up the express app
const express=require("express");
const port=5000;
const app=express();

//Middleware for getting the form data encoded
app.use(express.urlencoded());

//Middleware to access the static files
app.use(express.static("assets")); 

//set up the view engine ejs
app.set("view engine","ejs");    //setting the view engine
app.set("views","./views");      //setting the view path


//Connecting to MongoDB database
const db=require("./config/mongoose");
const Task=require("./models/task");


//sending all the requests with root as / to routes/index.js
app.use("/",require("./routes/index"));



//Firing the express app
app.listen(port,function(err){
    if(err)
    {
        console.log(`Error in firing up the server: ${err}`);
        return;
    }
    console.log(`To-Do-App is running absolutely fine on port: ${port}`);
})
