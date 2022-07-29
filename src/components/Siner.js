import React, { Component } from 'react'
import imgPath from '../images/loading.gif' 
import '../css/style1.css'
const Spiner=()=> {
  
    return (
      <div>
          <div className="loading-cont">
                <img src={imgPath} alt="" />
            </div>
      </div>
    )
  
}
export default Spiner
