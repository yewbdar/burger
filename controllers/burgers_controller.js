var express=require("express");
var burger=require("../models/burger.js");
var router = express.Router();

var app=express();

router.get("/",function(req,res){
    burger.select(function(data){
        var burObject={
            burger:data
        }
        console.log(burObject);
        res.render("index",burObject)
    })
});
router.post("/",function(req,res){

 });

 router.delete("/",function(req,res){

 });
 router.put("/",function(req,res){

});
module.exports=router;