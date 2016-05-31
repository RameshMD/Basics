var express = require('express');
var router = express.Router();

router.get("/get/:id", function(req,res){
  res.json({status:true,message:"Sucess"});
  console.log(req.params.id);
    console.log("Get Request");
});
router.post("/get", function(req,res){
  res.json({status:true,message:"Sucess"});
  console.log(req.body);
    console.log("Post Request");
});
module.exports = router;






/*
//Router Config
app.get("/api/get", function(req,res){
  res.json({status:true,message:"Sucess"});
    console.log("Get Request");
});
app.post("/api/get", function(req,res){
  res.json({status:true,message:"Sucess"});
  console.log("Post Request");
});
app.put("/api/get", function(req,res){
  res.json({status:true,message:"Sucess"});
    console.log("Put Request");
});
app.delete("/api/get", function(req,res){
  res.json({status:true,message:"Sucess"});
    console.log("Delete Request");
});
*/
