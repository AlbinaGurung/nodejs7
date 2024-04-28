console.log("hello world");
const express=require('express');
const app=express();//used to call functions
//or const app=require('express')()
app.get('/',(req,res)=>{
    console.log("hello world")
})

app.listen(3000,()=>(
    console.log("server has started at port 3000")
)); //It hosts my project at port 3000.