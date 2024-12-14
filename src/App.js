import React, { Component, Fragment } from 'react'
import Header from './Components/Header/Header'
import './App.css';
import {Grid, Typography} from '@material-ui/core'
import CardRecipe from './Components/CardRecipe/CardRecipe'
import ListRecipe from './Components/ListRecipe/ListRecipe'
import AddRecipe from './Components/AddRecipe/AddRecipe'
import Recipeinfo from './Components/Recipeinfo/Recipeinfo';


export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
         <Grid container>
           <Grid item sm = {1}></Grid>
           <Grid  className="gridOff" container item sm = {10}>
           <AddRecipe/>
           <Recipeinfo/>
           </Grid>
           <Grid item sm = {1}></Grid>
         </Grid>
         <Typography align = "center" className = "footer">Made with <span>🧡</span> in Sheryians</Typography>
         </Fragment>
       
      
    )
  }
}
