const express=require('express');
const app=express();
const user = require('./router/userRouter');
const {PORT} = require ('./config');
const { required } = require('nodemon/lib/config');
const cors = require('cors');
const path= require('path');
const db = require('./DB/mongoose');
const apartment = require('./router/apartmentRouter')
const member = require('./router/memberRouter')

app.use(cors());
app.use(express.json());
app.use(express.static('static'));
app.use("/user", user);
app.use("/apartment", apartment);
app.use("/member", member);

app.use((err,req, res,next)=>{
    console.error(err.stack) 
    res.status(500).send('Something broke!')
})





app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT} `);
});

db.connect();