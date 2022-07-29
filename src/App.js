import React, {useState} from 'react'
import NavBar from './components/NavBar.js'
import News from './components/News.js'
import LoadingBar from 'react-top-loading-bar'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [progre, setProgres]=useState(0)
  const apiKEy=process.env.REACT_APP_NEWS_API;

 
  const  setProgress=(progress)=>{
  setProgres(progress)
  }
 
  
    return (
      <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946' height={5}
        progress={progre}
   
      />
      <Routes>

          <Route exact path="/" element={<News apiKey={apiKEy} setProgress={setProgress}  key="/"  element pageSize={10} title='Latest HeadLines ' category='top'/>} />         
          <Route exact path="/business" element={<News apiKey={apiKEy} setProgress={setProgress} key="business"  pageSize={10} title='business HeadLines ' category='business'/>} /> 
          <Route exact path="/environment" element={<News apiKey={apiKEy} setProgress={setProgress} key="environment"  pageSize={10} title='environment HeadLines ' category='environment'/>} /> 
          <Route exact path="/entertainment" element={<News apiKey={apiKEy} setProgress={setProgress} key="entertainment"  pageSize={10} title='entertainment HeadLines ' category='entertainment'/>} /> 
          <Route exact path="/health" element={<News apiKey={apiKEy} setProgress={setProgress} key="health"  pageSize={10} title='health HeadLines ' category='health'/>} /> 
          <Route exact path="/food" element={<News apiKey={apiKEy} setProgress={setProgress} key="food"  pageSize={10} title='food HeadLines ' category='food'/>} /> 
          <Route exact path="/science" element={<News apiKey={apiKEy} setProgress={setProgress} key="science"  pageSize={10} title='science HeadLines ' category='science'/>} /> 
          <Route exact path="/politics" element={<News apiKey={apiKEy} setProgress={setProgress} key="politics"  pageSize={10} title='politics HeadLines ' category='politics'/>} /> 
          <Route exact path="/technology" element={<News apiKey={apiKEy} setProgress={setProgress} key="technology"  pageSize={10} title='technology HeadLines ' category='technology'/>} /> 
          <Route exact path="/sports" element={<News apiKey={apiKEy} setProgress={setProgress}  key="sports" pageSize={10} title='sports HeadLines ' category='sports'/>} /> 
          <Route exact path="/world" element={<News apiKey={apiKEy} setProgress={setProgress}  key="world" pageSize={10} title='world HeadLines ' category='world'/>} /> 
          <Route exact path="/top" element={<News apiKey={apiKEy} setProgress={setProgress}  key="top" pageSize={10} title='top HeadLines ' category='top'/>} /> 

      </Routes>
        
      </Router>
    )
}

export default App;
