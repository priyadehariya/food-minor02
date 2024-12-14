import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '2rem'
  },
  spaceTop:{
      marginTop : '2rem'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

function Card(props) {
  const classes = useStyles();
  let {name,about,Dets,Delete} = props
  return (
    <div className={classes.root}>
         <Accordion className={classes.spaceTop}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {about}
          </Typography>
        </AccordionDetails>
        <Typography align='right'>
            <Button onClick={Dets} color='primary'>Edit</Button>
            <Button onClick={Delete} color='secondary'>Delete</Button>
        </Typography>
      </Accordion>
    </div> 
    )}
export default Card