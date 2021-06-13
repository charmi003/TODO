const express=require("express");
const router=express.Router();
const home_controller=require("../controllers/home_controller");


router.get("/",home_controller.home);

router.post("/addTask",home_controller.addTask);

router.get("/deleteTasks",home_controller.deleteTasks);



/*Sending all the requests with /filter being the root to routes/filter.js */
router.use("/filter",require("./filter.js"));


module.exports=router;