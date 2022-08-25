const express=require('express')
const bodyParser=require('body-parser')
const mongoose=require('mongoose')
const app=express()
const {router}=require('./Routes/userRoutes')

app.use(bodyParser.json())
app.use('/',router)

const url='mongodb+srv://sreekanth:Fx47jN1EOMlYk91K@cluster0.vok4hmz.mongodb.net/?retryWrites=true&w=majority'
 
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection

db.on('error',console.error.bind(console,'Connection error'))

db.once('open',function(){
    console.log('Connection to database is successfully')
})
const PORT=5000 || process.env.PORT;

app.listen(PORT,()=>{
  console.log('Server is running on port',PORT)
})






