const mongoose=require('mongoose')
const mongoClient=mongoose.mongoClient

const userSchema=new mongoose.Schema({
    UserId:{type:Number,require},
    UserName:{type:String,require},
    Password:{type:String,require},
    Role:{type:String,require}
})


const userModel=mongoose.model('users',userSchema)

module.exports=userModel
