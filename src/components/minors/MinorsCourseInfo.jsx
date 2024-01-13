import * as React from 'react';
import {useState} from 'react'
import getData from '../../utils/getData';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MinorsModal from './MinorsModal';

const MinorsCourseInfo = ({courseName}) => {

  const [loaded, setCourseLoaded] = useState(false);
  const [CourseObj, setCourseObj] = useState();

    React.useEffect(()=>{
      getData('course/courseID=' + courseName)
          .then((json)=>{
              console.log('courseid',json);
              setCourseObj(json);
              setCourseLoaded(true);
          }).then(()=>{
          console.log("Course Name : " + courseName);
          console.log("CourseObj: " + CourseObj);
        })
    
    }, []);

  //fading animation
  if (!loaded) return(
      <>
          <div className='fading-big'></div>
          <div className='fading'></div>
          <div className='fading'></div>
      </>
  )
  return(
      <>
        <Typography id="modal-modal-title" variant="h3" component="h2">
            {CourseObj.title}
        </Typography>
        <Typography id="modal-modal-title" variant="h5">
          
        </Typography>
        <Typography id="modal-modal-description" variant='h6'>
          {CourseObj.description}
        </Typography>
      </>
  )
}
export default MinorsCourseInfo;