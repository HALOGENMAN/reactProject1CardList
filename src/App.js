import React , { Component }  from 'react';
import { CardList } from "./components/card-list/Card-list.components";
import { Search } from "./components/search-box/Search-box.components";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [],
      searchField: "",
    }
  }

  componentDidMount(){
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'https://halogen159monster.herokuapp.com/';
    fetch( proxyurl + url )
    .then(response => response.json())
    .then(user => this.setState({monsters:user}))
  }

  handelchange = e => {
    this.setState({ searchField : e.target.value, })
  }

  render(){
    
    const { monsters, searchField } = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase())); 
    
    return (
      <div className="App">
       <h1>JNV Monsters</h1>
       <Search 
          placeholder="search monster" 
          handleChange={ this.handelchange } 
        />
       <CardList monster={filteredMonster}/>
      
      </div>
    );
  }
}

export default App;
