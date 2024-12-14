import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import { Paper,CardContent,CardMedia,IconButton,Typography,Buttom} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width:'50%'
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '50%'
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function Recipeinfo() {
  const classes = useStyles();
  

  return (
    <Paper className={classes.root}>
        <CardMedia
        className={classes.cover}
        image="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3">
            Live From Space
          </Typography>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Date & time
          </Typography>
        </CardContent>
        
      </div>
      
    </Paper>
  );
}
