import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import '../css/style1.css'
import newsImg from '../images/newsimg.jpg'
import Spiner from './Siner';
import Error from './Error'
// import InfiniteScroll from 'react-infinite-scroll-component';
const News =(props)=> {
   const [articles, setArticles]=useState([])
   const [loading, setLoading]=useState(true)

   const [errorFlag, setErrorFlag]=useState(0)
   const [totalPages, setTotalPages]=useState(1)
   const [pageNo, setPageNo]=useState(1)





   
    

   const CheckError =(response)=> {
        if (response.status >= 200 && response.status <= 299) {
            // setErrorFlag(1)
          return response;
        } else {
            
            setErrorFlag(1)
          
          
        }
      }
    const updateData= async (pageNo)=>
    {
        props.setProgress(10)

        let url=`https://newsdata.io/api/1/news?apikey=${props.apiKey}&page=${pageNo}&category=${props.category}`;

       
        setLoading(true)
        let resp=await fetch(url).then(CheckError)
        if(resp===0)
        {
            console.log("error")
    
        }
        else{
            let respData=await resp.json();
         
            setArticles(respData.results)
            setLoading(false)
            setTotalPages(respData.totalResults/props.pageSize)
            
           
        }
        props.setProgress(100)


    }
    useEffect(()=>{
        console.log("hlo")
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
    // fetchMoreData = async()=>{
        
    //     this.setState({
    //         page:this.state.page+1
    //     })
    //     console.log(this.state.page)
    //     let url=`https://newsdata.io/api/1/news?apikey=pub_9628988648c41baa85577f0d420f3461ca56&page=${this.state.page}&category=${this.props.category}`;

    //     this.setState({
    //         loading:true
    //     })
    //     let resp=await fetch(url).then(this.CheckError)
    //     if(resp===0)
    //     {
    //         console.log("error")
    
    //     }
    //     else{
    //         let respData=await resp.json();
    //         this.setState({
    //             articles:this.state.articles.concat( respData.results),
    //             totalPages:respData.totalResults/this.props.pageSize,
    //             loading:false,
    //             totalResults:respData.totalResults
    //         })
            
    //         console.log(this.state.articles)
    //     }
    // }

  
  
    if(errorFlag===0)
    {

    
        if(loading==false)
        {   
        
            return (
      
      
                <div>
        
                <h1 style={{textAlign:'center'}}>{`Top Headlines on ${props.category}`}</h1>

                 {/* <InfiniteScroll
                  dataLength={this.state.articles.length}
                  
                   
                   // console.log(this.state.articles.length)
                  
                  next={this.fetchMoreData}
                  style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
                  inverse={true} //
                  hasMore={this.state.articles.length !== this.state.totalResults}
                  loader={<h4>Loading...</h4>}
                  scrollableTarget="scrollableDiv"
                > */}

                   <div className="news-container">
                    {
                    articles.map((element)=>{
                    return <NewsItem key={element.url} title={element.title} description={element.description} imgurl={element.image_url !=null?element.image_url:newsImg} uniqeUrl={element.link} pubDate={element.pubDate} source_id={element.source_id} />
                    })
                    }
                   </div>
                {/* </InfiniteScroll>  */}
               
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
    else{
        return (
            <Error/>
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
