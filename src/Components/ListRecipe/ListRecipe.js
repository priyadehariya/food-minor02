import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import EmojiFoodBeverage from '@material-ui/icons/EmojiFoodBeverage';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      padding:"10px 1.5rem"
    },
  }));

export default function ListRecipe() {
    const classes = useStyles();
    return (
        <div>
        <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<EmojiFoodBeverage />}
      >
        Delete
      </Button>
      </div>
    )
}
