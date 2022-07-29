import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import '../css/style1.css'
import newsImg from '../images/newsimg.jpg'
import Spiner from './Siner';
import Error from './Error'
import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=> {
   const [articles, setArticles]=useState([])
   const [loading, setLoading]=useState(true)

   const [errorFlag, setErrorFlag]=useState(0)
   const [totalPages, setTotalPages]=useState(1)
   const [pageNo, setPageNo]=useState(1)
   const [totalResults, setTotalResults]=useState(0)





   

    const updateData= async (pageNo)=>
    {
        props.setProgress(10)

        let url=`https://newsdata.io/api/1/news?apikey=${props.apiKey}&page=${pageNo}&category=${props.category}`;

       
        setLoading(true)
        let resp=await fetch(url)
        props.setProgress(50)
            let respData=await resp.json();
         
            setArticles(respData.results)
            setLoading(false)
            setTotalPages(respData.totalResults/props.pageSize)
            setTotalResults(respData.totalResults)
            props.setProgress(100)
      

    }
    useEffect(()=>{

        updateData(1)
    },[])
 
    const handleNextClick = async()=>
    {
      

        setPageNo(pageNo+1)
        updateData(pageNo)
    }
    const handlePreviousClick= async ()=>
    {
        setPageNo(pageNo-1)
        updateData(pageNo)
    }

  if(loading==false)
        {   
        
            return (
      
      
                <div>
        
                <h1 style={{textAlign:'center' , marginTop:'5rem'}}>{`Top Headlines on ${props.category}`}</h1>

             

                   <div className="news-container">
                    {
                    articles.map((element,index)=>{
                    return <NewsItem key={index} title={element.title} description={element.description} imgurl={element.image_url !=null?element.image_url:newsImg} uniqeUrl={element.link} pubDate={element.pubDate} source_id={element.source_id} />
                    })
                    }
                   </div>
               
                <div className="btn-cont">
                <button disabled={pageNo<=1} type='button' className='btn btn-primary' onClick={handlePreviousClick} >&larr; Previous</button>
                <button disabled={pageNo>=totalPages} type='button' className='btn btn-primary'onClick={handleNextClick} >Next &rarr;</button>
                </div></div>
           )
           }
        else
        {
         return(
           <Spiner/>
         )
        }

  
}


News.defaultProps={
    category:'top',
    pageSize:10
}
News.propTypes={
    title:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
}

export default News
