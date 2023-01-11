const express=require('express')
const path=require('path')
const bodyParser=require('body-parser')
const dbconnect=require('./DBconnect')
const cors = require('cors');
const app=express();
app.use(bodyParser.json());
app.use(cors())
let employees=[
    {id:1,name:"afroz",dept:"cse"},
    {id:2,name:"sateesh",dept:"IT"},
    {id:3,name:"reddy",dept:"IT"}
]

app.get('/readUsers',async (req,res)=>{
    let result=await dbconnect.readUsers();
    res.json(result);
})

app.post('/addUsers',async (req,res)=>{
    console.log(req.body);
    let result=await dbconnect.createUser(parseInt(req.body._id),req.body.name,
    parseInt(req.body.phone),req.body.email);
   return result;
});


app.put('/updateUser',async (req,res)=>{
    console.log(req.body);
    let result=await dbconnect.updateUser(parseInt(req.body._id),req.body.name,
    parseInt(req.body.phone),req.body.email);
   return result;
});

app.delete('/deleteUser',async (req,res)=>{
    console.log(req.body);
    let result=await dbconnect.deleteUser(parseInt(req.body._id),req.body.name,
    parseInt(req.body.phone),req.body.email);
   return result;
});

app.listen(3000,()=>console.log("server started at port 3000"));
