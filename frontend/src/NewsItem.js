import Description from './Description';
import './NewsItem.css'
import axios from 'axios';
import { useEffect,useState } from 'react';
function NewsItem (props)
{
    const [urls,setUrls]=useState([]);
    const [ratings,setRatings]=useState([])
    async function fetchingdata()
    {
      const response=  await axios.get(`https://my-project-minor.herokuapp.com/api/good`)
      response.data.map((details)=>{
      setUrls(comm=>[...comm,details.url])
       setRatings(rate=>[...rate,details.ratings])})
    }
    useEffect(()=>
    {
        console.log('nnsans')
        fetchingdata()
    },[]);
    // console.log(comments);
    return(
        <>
        {props.articles.map((articles)=>(<div className='item'><a className='title' href={articles.link} target="_blank"><h1>{articles.title}</h1></a>
            
               
                    
                   <div className='cleanurl'>{articles.clean_url}</div>
            
                    <div className='story'>
                        <p>{articles.summary}</p>
                        <img src={articles.media}/>
                        </div>
                        <Description article_link={articles.link} urls={urls} ratings={ratings}/>
                        </div>
                        ))}
        </>
    )
}
export default NewsItem;