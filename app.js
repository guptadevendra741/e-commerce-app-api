const express=require('express');
const cors = require('cors');
const db = require('./connect');
const addproduct = require('./routes')


const app = express();


app.use(express.json());
app.use(cors())

app.use('/',addproduct)

app.listen(4000, async(req,res)=>{
    db()
    console.log("app is connected at 4000")
})