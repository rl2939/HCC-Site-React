import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MinorsModal from './MinorsModal';

export default function MinorsAccordion({name, title, description, courses, note}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontSize: 20}}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography gutterBottom>
            Minor name: {name}
          </Typography>
          <Typography align='left' >
            {description}
          </Typography>
          {courses.map((c, i)=>
              <span key={i}>
                <MinorsModal courseName={c}/>
              </span>
            )
          }
          <Typography align='left' >
            Note: {note}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
