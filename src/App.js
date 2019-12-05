import React , { Component }  from 'react';
import { CardList } from "./components/card-list/Card-list.components"
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
    }
  }

  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://halogen159monster.herokuapp.com/';
    fetch(proxyurl + url)
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
  }

  render(){
    return (
      <div className="App">
       
       <CardList name="shayak">
       {
         this.state.monsters.map(monster => (<h1 key={monster.id}>{ monster.name }</h1>)
         )
       }
       </CardList>
      </div>
    );
  }
}

export default App;
