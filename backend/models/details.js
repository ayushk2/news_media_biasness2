const mongoose=require('mongoose');
const details=new mongoose.Schema({
    url:String,
  ratings:{
        left:
         {
             type:Number,
             default:0
        },
         skewsleft:
         {
             type:Number,
             default:0
        },
        center:{
             type:Number,
             default:0
        },
       skewsright:{
         type:Number,
         default:0
        },
        right:{
            type:Number,
            default:0
        },
    },
    comments:[{
        type:String
    }]
},
{ 
    timestamps:true
});
const Details= mongoose.model('Details',details);
module.exports=Details;