const app=require('./app')
const cors=require('cors');
app.use(cors());
const mongoose =require('mongoose');
const path = require("path");
const express= require('express');
if(process.env.NODE_ENV!=="PRODUCTION"){
require('dotenv').config({path:"backend/config/config.env"});
}
const port =process.env.PORT||3005;
const uri =process.env.ATLAS_URI;

mongoose.connect(uri);
const connection= mongoose.connection;
connection.once('open',()=>
{
    console.log("mongoose connection established");
})
const DetailsRouter=require('./routes/gettingdetails')
app.use('/api',DetailsRouter);
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
app.listen(port,()=>
{
    console.log(`server is running on ${port}`);
    console.log("hi");
    console.log("hello");
    console.log(uri);
    console.log(port);
})