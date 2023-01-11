const express=require('express');
const mongoose=require('mongoose');
const app = express();

mongoose.set('strictQuery',false);

 mongoose.connect("mongodb://127.0.0.1:27017/testdb" ,
 {useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log("connection successful"))
.catch((err)=>console.log(err));
app.listen(27017,()=>console.log("MongoDB server listeining at port 27017"));

const userList = new mongoose.Schema({
     _id:Number,
     name:String,
     phone:Number,
     email:String
 })

 const User= new mongoose.model("User",userList);

//  const user1 = new User({
//     _id:1,
//     name:"sateesh",
//     phone:123456,
//     email:"sateesh@gmail.com"
// })
// user1.save();

const createUser = async(_id,name,phone,email) =>{
    try{
        const user1=new User({
            _id:_id,
            name:name,
            phone:phone,
            email:email,
        });
        const result=await user1.save()
       
       //console.log(result);

    } catch(err){
        console.log(err);
    }
}
//createUser();


const readUsers=async()=>{

try{

    const result=await User.find();
    console.log(result);
    return(result);
}catch(err){
  console.log(err);
}

}
//readUsers();

const deleteUser=async(_id,name,phone,email)=>{
    try{
        const result=await User.deleteOne({_id});
        console.log(result);
    }catch(err){
        console(err)
    }
}
//deleteUser("4");



const updateUser = async(_id,name,phone,email)=>{
    try{
        const result=await User.updateOne(
            {_id},
            {$set: {email:email}}
        );
         console.log(result);
        }catch(err){
            console.log(err);
        }
};


module.exports.createUser=createUser;
module.exports.readUsers=readUsers;
module.exports.updateUser=updateUser;
module.exports.deleteUser=deleteUser;
