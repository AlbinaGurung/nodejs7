const { blogs, sequelize } = require('./model/index')
require("./model/index")
const {multer,storage}=require('./middleware/multerConfig')
const upload=multer({storage:storage})
const express=require('express')
const app=express();//used to call functions
//or const app=require('express')()
app.use(express.static('public'));

app.set('view engine','ejs')

// app.get('/blog',(req,res)=>{
//     const data={name:"albina" ,age:23}
//     res.render('home.ejs',{data})
// })
app.get('/',(req,res)=>
{
    res.render('home1.ejs')
})
app.get('/blog',(req,res)=>
{
    res.render('blog.ejs')
})
app.get('/blog/create',(req,res)=>
{
    res.render('create.ejs')
})
app.get('/blog/read',(req,res)=>
{
    res.render('read.ejs')
})

app.use(express.urlencoded({extended:true}));



app.post('/blog',upload.single('Image'),(req,res)=>{
    console.log(req.body)
    const {title,subtitle,description} = req.body 
    blogs.create({
        title:title,
        subTitle:subtitle,
        description:description,
        imageUrl:req.file.filename
    })
    res.redirect("/")
    })

 //sync the database and the model
// (async()=>{
//     try{
//      await sequelize.sync();
//      console.log("Database and model synced successfully")
//     }catch(error){
// console.error('error syncing the db and model',error)
//     }
// })();
// //fetching the data from the db and rendering it on the home1.ejs view
app.get('/blog/home1',async(req,res)=>
{
   
    try {
        console.log("hello")
        const allBlogs = await blogs.findAll();//making a rest call to an api to get data
       console.log(allBlogs,"hello");
    //    res.json(allBlogs); // Assuming you want to display JSON data
  
     res.render('home1',{ allBlogs })
    
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).send('Internal server error');
    }
})




app.listen(3000,'127.0.0.1',()=>(
    console.log("server has started at port 3000")
)); //It hosts my project at port 3000.



//another way of connecting to database(old way)
// const mysql=require('mysql2')
// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'node7db'

// })
// connection.connect((err)=>{
// if(err) throw err;
// console.log("Successfully Connected")});


 
// const query="Select * from blogs";
// connection.query(query,(err,results)=>{
//     if(err) throw err;
//     console.log('datafetched:'+results);
// })

 

 