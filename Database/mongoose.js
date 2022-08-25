const mongoose=require('mongoose')
const mongoClient=mongoose.mongoClient

const userSchema=new mongoose.Schema({
    UserId:{type:Number,required:true},
    UserName:{type:String,required:true},
    Password:{type:String,required:true},
    Role:{type:String,required:true}
})


const userModel=mongoose.model('users',userSchema)

module.exports=userModel
