import React, { Component } from 'react';
import Travel from './components/Travel'
import Travels from './components/Travels';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Travel destination="NYC" photo='https://www.euratechnologies.com/content/uploads/2016/12/Bons-plans-NYC-cover.jpg' alt="NYC" country = "USA" distance = "20000kms"/>
      <Travel destination="Casablanca" photo='https://www.courrierinternational.com/sites/ci_master/files/styles/image_original_1280/public/assets/images/casablanca_maroc_expat.jpg?itok=iEXhKQEB' alt="Casa" country = "Maroc" distance = "20000kms"/>
      <Travels/>
      </div>
    );
  }
}

export default App;
