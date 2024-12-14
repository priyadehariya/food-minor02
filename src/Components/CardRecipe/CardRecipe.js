import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card,CardHeader,CardMedia,CardContent,CardActions,Avatar,IconButton,Typography,Button} from '@material-ui/core';

import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import More from '@material-ui/icons/More'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin:"0 1rem 1rem 0"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
 
  avatar: {
    backgroundColor: red[500],
  },

  button: {
    marginLeft:'auto',
  },
}));

export default function CardRecipe() {
  const classes = useStyles();

  

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        className={classes.media}
        image="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<More/>}
      > Delete
      </Button>
      </CardActions>
    
      
    </Card>
  );
}