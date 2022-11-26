const router= require('express').Router();
const { response } = require('../app');
let Details=require('../models/details');
// router.route('/').get((req,res)=>{
//     Details.find().then(details=>res.send("kjdcnjwdn")).catch(err=>res.status(400).json(err))
// });
router.route('/good').get((req, res) => {Details.find().then(details=>res.json(details))});
  router.route('/detailspost').post((req,res)=>{
    const url=req.body.url
  const ratings=req.body.ratings
    const newdetails=new Details({url,ratings});
    newdetails.save().then(() =>res.json({msg:"kjnjsn"}))
    .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
  });
  // router.route('/detialspost').put((req,res)=>{
  //   const rates=req.body.rating;
  //   const urlss=req.body.url;
  //   Details.updateOne({url:urlss},{$inc:{ "rating.1":1}})});
  router.route('/goods').put((req,res)=>{
    const getrating=req.body.rating;
    switch(getrating)
    {
      case "left":
        Details.updateOne({url:req.body.url},{$inc:{"ratings.left":1}}).then((details)=>res.json(details));
        break;
        case "skewsleft":
          Details.updateOne({url:req.body.url},{$inc:{"ratings.skewsleft":1}}).then((details)=>res.json(details));
          break;
        case "center":
          Details.updateOne({url:req.body.url},{$inc:{"ratings.center":1}}).then((details)=>res.json(details));
          break;

        case "skewsright":
          Details.updateOne({url:req.body.url},{$inc:{"ratings.skewsright":1}}).then((details)=>res.json(details));
          break;
        case "right":
          Details.updateOne({url:req.body.url},{$inc:{"ratings.right":1}}).then((details)=>res.json(details));
    }
  });
   router.route('/goodss').put((req,res)=>{
    const url=req.body.url;
     const comment=req.body.comments;
     console.log("put");
    Details.updateOne({url:url},{$push:{comments:comment}}).then((details)=>res.json(details))
   });
   router.route('/comments').post((req,res)=>
   {
    const url =req.body.url;
    const comment=req.body.comments;
    console.log("post");
    console.log("jfj");
  const newDetails =new Details({url:url,ratings:{},comments:[comment]});
  newDetails.save().then(()=>res.json({msg:"done"})).catch(err => res.status(400).json({ error: 'Unable to add this book'}));
   })
   
  module.exports = router;