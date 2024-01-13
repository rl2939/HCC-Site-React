import * as React from 'react';
import {useState} from 'react'
import getData from '../../utils/getData';

export default function EmploymentTable2() {

  const [loaded, setTable2Loaded] = useState(false);
  const [Table2Obj, setTable2Obj] = useState();

    React.useEffect(()=>{
      getData('employment/employmentTable/professionalEmploymentInformation/')
          .then((json)=>{
              console.log('professionalEmploymentInformation',json);
              /*json.forEach(element => {
                //console.log(element.employer);
              });*/
              //console.log("a");
              setTable2Obj(json);
              setTable2Loaded(true);
          }).then(()=>{
          //console.log("Course Name : ");
          console.log("TableObj: " + Table2Obj);
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
                <th>Title</th>
                <th>Start Date</th>
            </tr>
        </thead>
        <tbody>
          {console.log("table1: " + JSON.stringify(Table2Obj.professionalEmploymentInformation))}
          {console.log("table2: " + Table2Obj)}
        {Table2Obj.professionalEmploymentInformation.map((p, i)=>
            <tr key={i}>

            <td data-label="Employer">{p.employer}</td>
                <td data-label="Degree">{p.degree}</td>
                <td data-label="City">{p.city}</td>
                <td data-label="Term">{p.title}</td>
                <td data-label="Term">{p.startDate}</td>
            </tr>
        )}

                
        </tbody>
    </table>
    
  );
}
