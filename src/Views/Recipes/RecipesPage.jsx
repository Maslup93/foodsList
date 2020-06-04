import React, { Component } from 'react';
import Lasagna from './Components/Lasagna';
import Fideos from './Components/Fideos';
import Milanesa from './Components/Milanesa';
import Bife4quesos from './Components/Bife4Quesos';

class RecipesPage extends Component {
  render() {
    return (
      <div>
        <Lasagna />
        <Fideos />
        <Milanesa />
        <Bife4quesos />
      </div>
    );
  }
}
export default RecipesPage;
