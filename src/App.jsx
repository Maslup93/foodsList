import React, { Component } from 'react';
import ProductList from './Components/ProductList';
import FoodList from './Components/FoodList';
import Header from './Components/Layout/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <FoodList />
        <ProductList />
      </div>
    );
  }
}

export default App;
