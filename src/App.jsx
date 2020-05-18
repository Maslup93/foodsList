import React, { Component } from 'react';

import FoodList from './Components/FoodList';
import IngredientList from './Components/IngredientList';
import Header from './Components/Layout/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FoodList />
        <IngredientList />
      </div>
    );
  }
}

export default App;
