const express=require('express');
const app=express();

const PORT=4000||process.env.PORT;
var cors = require('cors');
app.use(cors());

app.get('/getDetails',(req,res)=>{
    res.send('Hello this is get Details')
})
app.get('/getMessage',(req,res)=>{
    res.send('Hello this is get Message')
})

app.post('/sendMessage',(req,res)=>{
    res.send('Message Recieved');
})

app.listen(PORT,()=>{
    console.log('server is running on port 4000');
})