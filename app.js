
const express=require('express')
const app=express();//used to call functions
//or const app=require('express')()

app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const data={name:"albina" ,age:23}
    res.render('home.ejs',{data})
})

app.get('/home',(req,res)=>
{
    res.render('home.ejs')
})
app.get('/read',(req,res)=>
{
    res.render('read.ejs')
})
app.get('/create',(req,res)=>
{
    res.render('create.ejs')
})
app.get('/blog/edit',(req,res)=>
{
    res.render("edit.ejs")
})
app.get('/blog',(req,res)=>{
    res.render('blog.ejs')
})
app.listen(3000,'127.0.0.1',()=>(
    console.log("server has started at port 3000")
)); //It hosts my project at port 3000.