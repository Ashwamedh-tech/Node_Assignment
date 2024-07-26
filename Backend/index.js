const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser=require('body-parser')


const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://ashwamedharote25:Lrjy5gs7aomhb8qC@reactandnode.5gxlc8m.mongodb.net/User_DB?retryWrites=true&w=majority&appName=ReactandNode")

const db = mongoose.connection

const User = require('./model');

db.on('error',(err)=>{
    console.log("Error Found!!!",err.message)
});

db.once('open',()=>{
    console.log("Succesfully Connected to the Database");
})

app.listen(8000,(err)=>{
    if(err)
    {
        console.log("Error with Node")
    }
    else{
        console.log("Server is running on port:8000")
    }
})

app.post('/register',async(req,resp)=>{
    const user = new User({
        Username:req.body.Username,
        Password:req.body.Password,
        Hobbies:req.body.Hobbies,
        Interests:req.body.Interests
    })
    try{
        await user.save();
        resp.send("1")
    }
    catch{
        console.log("Error!!!")
        resp.send("Error Adding User!!!")
    }
})

app.get('/getData', async (req, resp) => {
    const { Username, Password } = req.query;
    try {
        const data = await User.findOne({ Username, Password });
        if (!data) {
            return resp.status(404).send("User not found or credentials do not match.");
        }
        resp.json(data);
        console.log(data);
    } catch (err) {
        console.error('Error getting data:', err);
        resp.status(500).send("Error getting data");
    }
});


app.post('/login',async(req,resp)=>{
    const username=req.body.Username
    const password=req.body.Password
    try{
        const user = await User.findOne({Username:username,Password:password})
        if (!user) {
            resp.send("User Doesn't Exist")
          }
          else{
            resp.send("1");
          }
    }
    catch (error) {
        console.error('Error finding user:', error);
        resp.status(500).json({ error: 'Internal server error' });
      }
})