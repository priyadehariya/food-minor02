import React from 'react'
import {TextField, Button, Grid, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        width:"100%",
        marginBottom: '1rem'
    },
    textfields: {
        width:"100%",
        marginBottom:'1rem'
    },
    buttonSpace:{
        marginLeft:'1rem'
    }
     
  }));

export default function AddRecipe() {
    const classes = useStyles();
    return (
        <Grid className={classes.root}>
            <Grid  item sm = {2}></Grid>
            <Grid container item sm = {8} >
            <TextField 
                className = {classes.textfields}
                 color="secondary"
                 label="Search field"
                variant="outlined" 
                />
                <TextField 
                className = {classes.textfields}
                 color="secondary"
                 label="Search field"
                variant="outlined" 
                />
                <TextField 
                className = {classes.textfields}
                 color="secondary"
                 label="Search field"
                variant="outlined" 
                />

                <Button variant="contained" color="secondary">
                 Save Recipe
                </Button>
                <Button className={classes.buttonSpace} variant="contained" color="primary">
                 Back
                </Button>
            </Grid>
            <Grid item sm = {2}></Grid>
        </Grid>
    )
}
