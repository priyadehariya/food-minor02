import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import GridOn from '@material-ui/icons/GridOn';
import GridOff from '@material-ui/icons/GridOff';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom : '2rem'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color = "secondary" position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          <span role = "img" aria-label ="spoon1" aria-labelledby = "jsx-ally/accessible-emoji"> 🥄</span>
          फियुकfood
          <span role = "img" aria-label ="spoon1" aria-labelledby = "jsx-ally/accessible-emoji"> 🍴</span>
          

          </Typography>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <GridOn/>
            <GridOff/>
          </IconButton>
          <Button color="inherit">ADD RECIPE</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
