const express=require('express')
const mongoose=require('mongoose')
const app=express()
const PORT = 8000
const MONGODB_URI=`mongodb+srv://aaronjomon24:aaronjomon5@aaronjomon.jvfff.mongodb.net/?retryWrites=true&w=majority&appName=aaronjomon`

app.get(express.json);
app.listen(PORT,()=>{
  console.log(`Server is running successfully at ${PORT}`)
})
