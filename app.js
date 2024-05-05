
const express=require('express')
const app=express();//used to call functions
//or const app=require('express')()
app.use(express.static("/public/style.css"))
const { blogs } = require('./model/index')
require("./model/index")
app.set('view engine','ejs')
// app.get('/blog',(req,res)=>{
//     const data={name:"albina" ,age:23}
//     res.render('home.ejs',{data})
// })
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>
{
    res.render('home.ejs')
})
app.get('/blog',(req,res)=>
{
    res.render('blog.ejs')
})
app.get('/blog/home',(req,res)=>
{
    res.render('home.ejs')
})

app.get('/blog/create',(req,res)=>
{
    res.render('create.ejs')
})
app.get('/blog/read',(req,res)=>
{
    res.render('read.ejs')
})


app.post('/blog',(req,res)=>{
console.log(req.body)
const {title,subtitle,description} = req.body 
blogs.create({
    title:title,
    subTitle:subtitle,
    description:description
})
res.redirect("/")
})
app.listen(3000,'127.0.0.1',()=>(
    console.log("server has started at port 3000")
)); //It hosts my project at port 3000.