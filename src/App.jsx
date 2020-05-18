import React, { Component } from 'react';
import FoodList from './Components/FoodList';
import IngredientList from './Components/IngredientList';

class App extends Component {
  render() {
    return (
      <div>
        <FoodList />
        <IngredientList />
      </div>
    );
  }
}

export default App;
