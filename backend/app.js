const express=require('express');
// const detailsRouter=require('./routes/gettingdetails');
// app.use('/details',detailsRouter);
const app=express();
app.use(express.json())

 module.exports=app;