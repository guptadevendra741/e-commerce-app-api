const mongoose = require('mongoose');

const db =()=>{
    mongoose.connect('mongodb+srv://guptadevendra7432:ecommerce@cluster0.njkqiti.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
        console.log("database connected !!")
    }  
    )
} 

module.exports=db;