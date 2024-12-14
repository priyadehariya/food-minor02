import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button,IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const classes = useStyles();
  let {addCard,toggle}= props
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            DesKription
          </Typography>
            {
              toggle ?  <Button variant='contained' onClick={addCard} color='secondary'>Go back</Button>:<Button onClick={addCard} color='inherit'>Add card</Button> 
            }
          </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header