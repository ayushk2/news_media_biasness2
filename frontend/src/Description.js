import './Description.css'
import axios from 'axios';
import { useState,useRef, useEffect} from 'react';
function Description(props)
{
    const urls=[...props.urls]
    console.log(urls)
    const ratings=[...props.ratings]
    console.log(ratings)
    let currentUrl=props.article_link;
    let rating=-1;
    let arrayValues=[0,0,0,0,0];
    if(urls.includes(currentUrl))
    {     let value= urls.indexOf(currentUrl)
           arrayValues[0]=ratings[value].left;
           arrayValues[1]=ratings[value].skewsleft;
           arrayValues[2]=ratings[value].center;
           arrayValues[3]=ratings[value].skewsright;
           arrayValues[4]=ratings[value].right;

    }
    let ratingarray=[0,0,0,0,0];
    let stringRating="";
    const [comments,setComments]=useState();
    const [buttonValue,setButton]=useState(false);
    function handleEvent (event)
    {
        event.preventDefault();
        console.log(event.target.value);
        switch(event.target.value)
        {
            case "Left":
                rating=0;
                stringRating="left";
                break;
                case "SkewsLeft":rating=1;
                stringRating="skewsleft";
                break;
             case "Center":rating=2
             stringRating="center";
             break;
             case "SkewsRight":rating=3;
             stringRating="skewsright";
             break;
             case "Right":rating=4;
             stringRating="right";
              break;
              default:rating=6;
        }
        console.log(rating);
         ratingarray[rating]=1;
        console.log(currentUrl)
         if(urls.includes(currentUrl))
     {
            
             axios.put('https://my-project-minor.herokuapp.com/api/goods',{url:currentUrl,rating:stringRating})
         }
     else{
        axios.post('https://my-project-minor.herokuapp.com/api/detailspost',{url:currentUrl,ratings:{ left:ratingarray[0],skewsleft:ratingarray[1],center:ratingarray[2],skewsright:ratingarray[3],right:ratingarray[4]}})
        // }
    }
}
function handler(event)
{
     setComments(event.target.value);
}
function postingComments()
{
      if(urls.includes(currentUrl))
      {
        axios.put('https://my-project-minor.herokuapp.com/api/goodss',{url:currentUrl,comments:comments})
      }
      else
      {
        axios.post('https://my-project-minor.herokuapp.com/api/comments',{url:currentUrl,comments:comments})
      }
}
   console.log('repeating');
    return(
        <><div>
        <select size="5" className='biasness' onChange={handleEvent}>
        <option value="Left">Left {arrayValues[0]}</option>
        <option value="SkewsLeft">Skews Left {arrayValues[1]}</option>
        <option value="Center">Center {arrayValues[2]}</option>
        <option value="SkewsRight">Skews Right {arrayValues[3]}</option>
        <option value="Right">Right {arrayValues[4]}</option>
    </select>
       <input className='Comments' onChange={handler} value={comments}></input>
       <button className='buttonDescription' onClick={postingComments}>submit</button>
    </div>
        </>
    )
}

export default Description;
