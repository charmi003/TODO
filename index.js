//Setting up the express app
const express=require("express");
const port=5000;
const app=express();

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
