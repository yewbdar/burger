var express=require("express");
var burger=require("../models/burger.js");
var router = express.Router();

//var app=express();

router.get("/",function(req,res){
    burger.selectAll(function(err,data){
        res.render("index",{burger:data})
        
    });
    // burger.selectAll("burgers" , function(err,data){
    //     console.log(data);
    // });
    // res.render("index",{burger:data})
    
});

router.post("/burgers",function(req,res){
    console.log("am hare in rout controller POST ");

    console.log(req.body.burger.burger_name);
    
  burger.insertOne(req.body.burger.burger_name);
//  res.redirect('/');
 });
 
 router.put("/",function(req,res){

});
module.exports=router;