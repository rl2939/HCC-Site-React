import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PeopleModal({email, imagePath, facebook, name, tagline, interestArea, 
    office, phone, title, website, username, twitter}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h3" component="h2">
            {name}
          </Typography>
          <Typography id="modal-modal-title" variant="h5">
            {title}
          </Typography>
          <Typography id="modal-modal-description" variant='h6'>
            {username}
          </Typography>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            {tagline}
          </Typography>
          <div className='peopleModalFlex'>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <img src={imagePath} alt={name}/>
            </Typography>
            <div>
              {interestArea &&
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Interest Area(s): {interestArea}
                </Typography>
              }
              {office &&
                <Typography id="modal-modal-description">
                    Office: {office}
                </Typography>
              }
              {website &&
                <Typography id="modal-modal-description" >
                  Website: <a href={website} target="_blank">{website}</a>
                </Typography>
              }
              {email &&
                <Typography id="modal-modal-description">
                    Email: {email}
                </Typography>
              }
              {phone &&
                <Typography id="modal-modal-description">
                    Phone: {phone}
                </Typography>
              }
              {facebook &&
                <Typography id="modal-modal-description">
                    Facebook: {facebook}
                </Typography>
              }
              {twitter &&
                <Typography id="modal-modal-description">
                    Twitter: {twitter}
                </Typography>
              }
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}