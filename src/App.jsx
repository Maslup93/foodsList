import React, { Component } from 'react';
import ProductList from './Components/ProductList';
import FoodList from './Components/FoodList';

import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <FoodList />
        <ProductList />
      </div>
    );
  }
}

export default App;
