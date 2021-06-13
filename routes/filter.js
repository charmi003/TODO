const express=require("express");
const router=express.Router();
const filter_controller=require("../controllers/filter_controller");



router.get("/overdue",filter_controller.overdue);

router.get("/today",filter_controller.today);

router.get("/date",filter_controller.date);

router.get("/month",filter_controller.month);

router.get("/results/:query_name",filter_controller.results);


module.exports=router;