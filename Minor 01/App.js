import React, { Component, Fragment } from 'react';
import './App.css';
import Header from  './Components/Header/Header'
import Card from './Components/Card/Card'
import Save from './Components/Save/Save'
import { Grid, Typography } from '@material-ui/core';


class App extends Component{
  state={
    cards : [],
  toggle: false,
  editable: true,
  id:'',
  name:'',
  about:''
  }
  componentDidMount(){
    this.setState({cards: JSON.parse(localStorage.getItem('cards'))|| []})
  }
  onEdit=()=>{
    this.setState({toggle: !this.state.toggle,editable:true})
  }
  onaddNewCard=()=>{
    this.setState({toggle:!this.state.toggle,editable:false,id:'',name:'',about:''})
  }
  oncardDets(card){
    this.setState({
      id:card.id,
      name:card.name,
      about:card.about
    })
    this.onEdit()
  }
  onnewCardValue=(event)=>{
    this.setState({
    [event.target.name]:event.target.value
    })
  }
  onDelete=(id)=>{
    const leftCards=this.state.cards.filter(card => card.id!==id)
    this.setState({cards:leftCards})
    localStorage.setItem('cards',JSON.stringify(leftCards))
  }

  onSaveChanges=()=>{
    const {id,name,about}= this.state
    if(id ==='' || name ==='' || about==='') return alert('All fields must be filled')
    const Card = {id,name,about}
    const cardIndex= this.state.cards.findIndex(c=>c.id===id)
    const copyOfCard= [...this.state.cards]
    if (cardIndex ===-1) copyOfCard.push(Card)
    else copyOfCard[cardIndex]= Card
    this.setState({ cards:copyOfCard })
    localStorage.setItem('cards',JSON.stringify(copyOfCard))
    this.onaddNewCard()
  }
  render(){
   const cards= this.state.cards.map(card=>{
     return (
       <Card 
       key={card.id}
       id={card.id}
       name={card.name}
       about={card.about}
       edit={this.onEdit}
       Dets={()=>this.oncardDets(card)}
       Delete={()=>this.onDelete(card.id)}
       />
     )
   })

   let save = (
     <Save
     id={this.state.id}
     name={this.state.name}
     about={this.state.about}
     editable={this.state.editable}
     newValues={(event)=>this.onnewCardValue(event)}
     Save={this.onSaveChanges}
     />
   )


    return(
    <Fragment>
      <Header addCard={this.onaddNewCard} toggle={this.state.toggle} />
      <Grid spacing={2} container>
      <Grid sm={2} item></Grid>
      <Grid sm={8} item>
        {this.state.toggle ? save : cards}  
      </Grid>
      <Grid sm={2} item></Grid>
      </Grid>
      <Typography align='center' style={{marginTop:'2rem'}}>
        Made with <span style={{color: 'red'}}>❤</span>  in Sheryians coding school
      </Typography>
    </Fragment>
    )
    
  }
}


export default App;
