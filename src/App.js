import React, { Component } from 'react';

import Travel from './components/Travel'

import './App.css';
const user = {
  destination:"NYC", 
  photo:<img src = 'https://www.euratechnologies.com/content/uploads/2016/12/Bons-plans-NYC-cover.jpg'width="200px" alt="NYC"/>,
  country:"USA", 
  distance:"20000kms"
}
const anthony = {
  destination:"casablanca", 
  photo:<img src = 'https://www.officetourismemaroc.com/src/img/villes/Casablanca/casablanca-settat-office-tourisme-maroc-casablanca.png'width="200px" alt="NYC"/>,
  country:"Maroc", 
  distance:"2000kms"
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Travel {...user}/>
      <Travel {...anthony}/>
      </div>
    );
  }
}

export default App;
