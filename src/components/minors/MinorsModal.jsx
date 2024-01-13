import * as React from 'react';
import {useState} from 'react'
import getData from '../../utils/getData';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import MinorsCourseInfo from './MinorsCourseInfo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MinorsModal({courseName}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
}
  const handleClose = () => setOpen(false);


  return (
    <span>
      <Button aria-label onClick={handleOpen}>{courseName}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MinorsCourseInfo courseName={courseName}></MinorsCourseInfo>
          
        </Box>
      </Modal>
    </span>
    );
    {/*

    */}
  
}