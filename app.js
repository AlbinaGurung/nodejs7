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
// app.get('/',(req,res)=>
// {
//     res.render('home1.ejs')
// })
app.get('/blog',(req,res)=>
{
    res.render('blog.ejs')
})
app.get('/blog/create',(req,res)=>
{
    res.render('create.ejs')
})

//getting the blog or data as per id 
app.get('/blog/:id/show',(req,res)=>
{
    //get the id
    const id=req.params.id;
    console.log(id);
   
     blogs.findOne({where:{id}})
     .then(blog=>{
        if(!blog)
        {
            return res.status(404).send("blog not found");
        }
        res.render('show',{blog});
     })
     .catch(err=>
        {
            console.error("Error finding blog".err);
            res.status(500).send("Internal Server Error");
        });

    });

   


app.use(express.urlencoded({extended:true}));

//updating the data or blog based on id
app.post('/blog/:id/update',upload.single('Image'),(req,res)=>{
    
    const id=parseInt(req.params.id);
    console.log(id);
    const {title,subTitle,description,imageUrl}=req.body;
    console.log(req.body)
    console.log(title,subTitle,description,imageUrl);
    blogs.update({title,subTitle,description,imageUrl},{where:{id}})
    .then(([result])=>{
        if(result ===0)
        {
            return res.status(404).send("Task not found")
        }
        res.status(200).send("updated successfully")
    })
    .catch(err=>
    {
console.err("error updating")
res.status(500).send("Internal Server Error");
    });
});


//creating new blog
app.post('/blog',upload.single('Image'),(req,res)=>{
    console.log(req.body)
    const {title,subtitle,description} = req.body 
    blogs.create({
        title:title,
        subTitle:subtitle,
        description:description,
        imageUrl:req.file.filename
    })
    res.redirect("/blog/home1")
    })

 //fetching the data or blog from the db and rendering it on the home1.ejs view
app.get('/blog/home1',async(req,res)=>
{
   
    try {
        console.log("hello")
        const allblogs = await blogs.findAll();//making a rest call to an api to get data
       console.log(allblogs,"hello");
    //    res.json(allblogs); // Assuming you want to display JSON data
  
     res.render('home1',{ allblogs })
    
    } catch (error) {
        console.error('Error fetching blogs:', error);
        res.status(500).send('Internal server error');
    }
})




app.listen(3000,'127.0.0.1',()=>(
    console.log("server has started at port 3000")
)); //It hosts my project at port 3000.





 

 