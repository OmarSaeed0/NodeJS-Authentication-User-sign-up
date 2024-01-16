
const express =require('express');
const app=express();
const data=require('./data.js');

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.get('/omar',(req,res)=>{
    res.render('omar');
})

app.post('/omar',(req,res)=>{
    let user= new data({
        username : req.body.username,
        password : req.body.password
    });
    user.save().then(user =>console.log(user));
    res.send({success:true})
});

app.listen(2000,(req,res)=>{
console.log("server is listining on port A7A");
});