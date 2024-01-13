import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DegreesCard({degreeName, title, description, concentrations, availableCertificates}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.primary">
          {title}
        </Typography>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {degreeName}
        </Typography>
        <Typography sx={{ fontSize: 16 }}>
          {description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {/* Get either concentrations or available certificates */}
          {concentrations &&
                  concentrations.map((c, i)=>
                      <span key={i}>
                          {c} &nbsp;
                      </span>
                  )
          }
          {availableCertificates &&
                  availableCertificates.map((c, i)=>
                      <span key={i}>
                          {c} &nbsp;
                      </span>
                  )
          }
        </Typography>

      </CardContent>
    </Card>
  );
}