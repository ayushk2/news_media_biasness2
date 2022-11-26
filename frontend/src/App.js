import logo from './logo.svg';
import './App.css';
import { useState,useRef, useEffect} from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';
function App() {
  const [keyword,setKeyword]=useState();
  const [button,setButton]=useState(false);
  const [articles,setArticles]=useState([]);
  const handleEvent=(event)=>
  {
    //event.preventDefault();
    setKeyword(event.target.value);
  }

  const displaynewsitems=async ()=>
  {
   var options = {
     method: 'GET',
    url: 'https://api.newscatcherapi.com/v2/search',
    params: {q:`${keyword}`, lang: 'en', sort_by: 'relevancy', page: '1',sources:'nytimes.com,thewire.in,swarajyamag.com,theprint.in,organiser.org,ndtv.com,forbes.com,cnn.com,inc.com,abc4.com,indiatimes.co,latestly.com,thehindu.com,firstpost.com,telegraphindia.com,ptinews.com,foxnews.com,indianexpress.com,thestatesman.com,thequint.com,deccanchronicle.com,opindia.com,statetimes.in'},
    headers: {
      'x-api-key': 'QhouhYP0ctGhV0XkS5b_lnkGJO4_zfTjzR2lRbxqKHE'
     }
     
   }    
 await axios.request(options).then((response)=>setArticles(response.data.articles));
    //setKeyword("");
}
useEffect(()=>
{
  if(button)
  {
    console.log("kjcnkj");
    setButton(false);
  displaynewsitems();
  }
});

console.log("hi");
  return(
    <div>
      <h1 className='name'>BUBBLE NEWS</h1>
      <div className='searchbox'><input className='search' value={keyword} onChange={handleEvent}/></div>
     <div className='buttonbox'> <button  className='submit' onClick={()=>{setButton(true)}}>Submit</button></div>
      <NewsItem articles={articles}/>
     </div>
  )
}

export default App;
