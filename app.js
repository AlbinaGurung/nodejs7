
const express=require('express')
const app=express();//used to call functions
//or const app=require('express')()

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const data={name:"albina" ,age:23}
    res.render('home.ejs',{data:data})
})
app.get('/about',(req,res)=>{
    res.send("This is about page")
})
app.get('/home',(req,res)=>
{
    res.render('home.ejs')
})
app.get('/blog/create',(req,res)=>
{
    res.send("Create form page")
})
app.get('/blog/edit',(req,res)=>
{
    res.send("edit form")
})
app.get('/blog',(req,res)=>{
    res.render('blog.ejs')
})
app.listen(3000,'127.0.0.1',()=>(
    console.log("server has started at port 3000")
)); //It hosts my project at port 3000.