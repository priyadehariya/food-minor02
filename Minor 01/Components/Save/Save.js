import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        width:'100%',
        marginTop:'2rem'
    },
  }));

function Save(props) {
    const classes = useStyles();
    let {editable,name,id,about,newValues,Save}=props
    return(
      <div>
        <TextField
        onChange={newValues}
        value={id}
        name='id'
        className={classes.root}
        label="UserId"
        disabled={editable}
        placeholder="UserId"
      />
      <TextField
      onChange={newValues}
      value={name}
        name='name'
        className={classes.root}
        label="Username"
        placeholder="Username"
      />
      <TextField
      onChange={newValues}
      value={about}
      name="about"
      className={classes.root}
      label="About"
      placeholder="About"
      multiline
      row={3}
    />
    <Typography className={classes.root}>
    <Button onClick={Save} variant='contained' color='primary'>Save</Button>
    </Typography>
    </div>
    )};
export default Save