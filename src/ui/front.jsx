import React,{useState} from 'react'
import './style.css';

export default function Front() {
 
  const [data,setdata] = useState([]);
  const [urls,surl] = useState(null);
  const [content,scontent] = useState(false);
  function getvalue(event){
    
if(event.target.value === null){
  alert("something went wrong")
}
 surl(event.target.value)
  }

  function callApi() {
    if (urls === null){
      alert("please fill proper link ")
    }
    else{
      
   if(urls.substring(0,16) ==="https://youtu.be"|| urls.substring(0,27) === "https://youtube.com/shorts/"){
  
  let url=""
   if (urls.substring(0,16) ==="https://youtu.be"){
     url = 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id='+urls.split("be/")[1].split("?")[0]; 
    //url = 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id='+'ICo9cv8O3Ec'; 
   }
   else if(urls.substring(0,27) === "https://youtube.com/shorts/"){
  url = 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl?id='+urls.split("/shorts/")[1].split("?")[0]; 
    
   }   
   const options = {
    method: 'GET',
headers: {
  'X-RapidAPI-Key': process.env.REACT_APP_KEY,
  'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
}
};
    
    try {
      fetch(url, options)
      .then(response=>response.json())
      .then(data=>{setdata(data);scontent(true)})
      .catch(error=>{
        alert("Something went wrong from server side or the URL is invalid. Try again")
        scontent(false)}
      )
    } catch (error) {
      alert("Something went wrong from server side or the URL is invalid. Try again")
      scontent(false)
    }
  }
  else{
    alert("enter valid link")
  }
  }
  }
 const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      callApi();
    }
  };
  return (
    <>
    <div className='container'>
        <h1>Youtube Video downloader</h1>
      <div className='search-bar'>
      <input type='text' className='input' onChange={getvalue} onKeyDown={handleKeyDown} />
      <button className='search' onClick={callApi}>
      <i class="glyphicon glyphicon-search"></i>
      </button>
      </div>
      </div>
      {content&&<div className='container'>
 <div className='title-text'><h3 className='data-title'>{data.title}</h3></div>
      <div className='afterclicking'>
<img src={data.thumbnail.pop().url} className='thumbnail'/>

<div className='video-button'>
 <a href={urls}><button className='download-and-show'   style={{backgroundColor:"#11cdef"}}>WATCH VIDEO</button></a>
 <a href={data.formats.pop().url}><button className='download-and-show'  style={{backgroundColor:"#f5365c"}}> DOWNLOAD VIDEO</button></a>

</div>
</div>
</div>}
    </>
  )
}
