import React from 'react'

import '../css/style1.css'

const NewsItem= (props)=> {
    
 
 
      let {title,description,imgurl,uniqeUrl,pubDate,source_id}=props;
    return (
        <>
        <div className="card" style={{width: '18rem' ,alignItems:'center'}}>
            <img src={imgurl} style={{height:'200px'}} className="card-img-top" alt="..."/>
            <div className="card-body" style={{height:'200px',overflow:'scroll'}}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text" >{description}</p>
            </div>
                <p className='pubDate-para'>published at: {pubDate}</p>

                <a href={uniqeUrl} style={{width:'200px' ,marginBottom:'10px'}} target='_blank' className="btn btn-primary">Read More</a>
                <p className='source-para' >{source_id}</p>
        </div>
        </>
    )
  
}
NewsItem.defaultProp={
    imgurl:'https://www.istockphoto.com/photos/breaking-news'
}
export default NewsItem
