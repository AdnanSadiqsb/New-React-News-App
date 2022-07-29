import React, { Component } from 'react'
import errorImg from '../images/errorimg.jpg'
export default class Error extends Component {
  render() {
    return (
      <div className='error-cont'>
        <h1>Error While Fetching the Data from api</h1>
        <img src={errorImg} alt="" />
      </div>
    )
  }
}