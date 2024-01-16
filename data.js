const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/sss')
const userschema= mongoose.Schema({
    username: String,
    password:String
    
});
const usermodel= mongoose.model('user',userschema);
module.exports= usermodel;