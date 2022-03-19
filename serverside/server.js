const express = require('express');
const app = express();
const cors=require("cors");
var data=require("./data.json");
const fs=require("fs");
var old=[];
var recent =[];
var short=[];
var long=[];
app.use(express.json());

app.use(cors());

const changeData=(newData)=>{
  
  fs.writeFile("./data.json", JSON.stringify(newData), "utf8", (err) => {
    if (err) throw err;
    console.log("Complete");
  });
}

app.get('/',function(req,res){
  res.send("Hello");
  
});

app.get("/todos",(req,res)=> res.json(data));



app.post("/update",(req,res)=>{
  data=req.body;
  changeData(req.body);
  
})

app.listen(5100, () => console.log('Server running at port 5100'));






