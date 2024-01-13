import * as React from 'react';
import {useState} from 'react'
import getData from '../../utils/getData';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import EmploymentTable from './EmploymentTable';
import EmploymentTable2 from './EmploymentTable2';

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

export default function EmploymentModal({data, coopType}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
}
  const handleClose = () => setOpen(false);

  return (
    <span>
      <Button aria-label onClick={handleOpen}>View the {data.title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx = {{overflowY: "auto", marginTop:"7%", maxHeight: "90vh"}}
      >
        <Box sx={style}>
            {coopType &&
                <EmploymentTable data={data}></EmploymentTable>
            }
            {!coopType &&
                <EmploymentTable2 data={data}></EmploymentTable2>
            }
        </Box>
      </Modal>
    </span>
    );
    {/*
    <MinorsCourseInfo courseName={courseName}></MinorsCourseInfo>

    */}
  
}