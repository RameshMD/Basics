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
