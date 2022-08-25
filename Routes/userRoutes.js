const express=require('express')
const userModel=require('../Database/mongoose')
const router=express.Router()

router.post('/Addusers',async(req,res)=>{
  let {UserId,UserName,Password,Role}=req.body

  if(UserId && UserName && Password &&Role )
    {
    var user=new userModel({
       UserId:req.body.UserId,
       UserName:req.body.UserName,
       Password:req.body.Password,
       Role:req.body.Role
     })
   }
   else{
    res.send('Error ! some fields are empty')
   }

  if(user)
   {  await user.save()
       res.json({message:"User Created successfully",user})
   }
   else{
    res.send('Error ! User not created')
   }
})

router.get('/login',async(req,res)=>{
    res.send('hello')
})

module.exports={router}




