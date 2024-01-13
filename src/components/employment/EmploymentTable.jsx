import * as React from 'react';
import {useState} from 'react'
import getData from '../../utils/getData';

export default function EmploymentTable() {

  const [loaded, setTableLoaded] = useState(false);
  const [TableObj, setTableObj] = useState();

    React.useEffect(()=>{
      getData('employment/coopTable/coopInformation/')
          .then((json)=>{
              console.log('coopInformation',json);
              /*json.forEach(element => {
                //console.log(element.employer);
              });*/
              //console.log("a");
              setTableObj(json);
              setTableLoaded(true);
          }).then(()=>{
          //console.log("Course Name : ");
          console.log("TableObj: " + TableObj);
        })
    
    }, []);

    //console.log("aaa " + TableObj.coopInformation);
  //fading animation
  if (!loaded) return(
      <>
          <div className='fading-big'></div>
          <div className='fading'></div>
          <div className='fading'></div>
      </>
  )

  return (
    <table className="ui celled table down">
        <thead>
            <tr>
                <th>Employer</th>
                <th>Degree</th>
                <th>City</th>
                <th>Term</th>
            </tr>
        </thead>
        <tbody>
          {console.log("table1: " + JSON.stringify(TableObj.coopInformation))}
          {console.log("table2: " + TableObj)}
        {TableObj.coopInformation.map((p, i)=>
            <tr key={i}>

            <td data-label="Employer">{p.employer}</td>
                <td data-label="Degree">{p.degree}</td>
                <td data-label="City">{p.city}</td>
                <td data-label="Term">{p.term}</td>
            </tr>
        )}

                
        </tbody>
    </table>
    
  );
}
