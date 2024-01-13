//useState so we get redraws and the vars are available throughout
import { useState } from 'react'
import React from 'react'
import './App.css'
//get my getData
import getData from './utils/getData';
//add my components
import PeopleTabs from './components/people/PeopleTabs';
import DegreesTabs from './components/degrees/DegreesTabs';
import MinorsGroup from './components/minors/MinorsGroup';
import EmploymentGroup from './components/employment/EmploymentGroup';

function App() {
  //create state
  //const [getter, setter] = useState(init);
  const [loaded, setLoaded] = useState(false);
  const [aboutObj, setAboutObj] = useState();

  //go get the data!
  React.useEffect(()=>{
    //go call my getData
    getData('about/')
      .then((resJson)=>{
        console.log('here', resJson);
        setLoaded(true);
        setAboutObj(resJson);
      })
  }, []);

  //show loading when we don't have data yet
  if (!loaded) return (
    <>
      <div className='fading-big'></div>
      <div className='fading-big'></div>
      <div className='fading'></div>
    </>
  );

  return (
    <>
      <div className='stick'>
        <h1>iSchool</h1>
      </div>
      <div className='App'>
        <div className='About'>
          {/*get about*/}
          <h2>{aboutObj.title}</h2>
          <h3>{aboutObj.description}</h3>
          <div className='aboutQuote'>
            <h4>{aboutObj.quote}</h4>
            <h4>-- {aboutObj.quoteAuthor}</h4>
          </div>
        </div>
        <hr/>
        {/* space for all other componets */}
        {/* Degrees, minors, employment, then people */}
        <DegreesTabs/>
        <MinorsGroup/>
        <EmploymentGroup/>
        <PeopleTabs/>
      </div>
    </>
  )
}

export default App
