import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Ingredients from './Ingredients';

class IngredientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [
        { id: uuidv4(), name: 'azucar' },
        { id: uuidv4(), name: 'sal' },
        { id: uuidv4(), name: 'pimienta negra' },
        { id: uuidv4(), name: 'ajo' },
        { id: uuidv4(), name: 'cebolla' },
        { id: uuidv4(), name: 'pimienton' },
        { id: uuidv4(), name: 'oregano' },
        { id: uuidv4(), name: 'pimienta blanca' },
        { id: uuidv4(), name: 'pan rallado' },
        { id: uuidv4(), name: 'harina' },
        { id: uuidv4(), name: 'manteca' },
        { id: uuidv4(), name: 'crema de leche' },
        { id: uuidv4(), name: 'leche' },
        { id: uuidv4(), name: 'jamon' },
        { id: uuidv4(), name: 'salsa de tomate' },
        { id: uuidv4(), name: 'tuco' },
        { id: uuidv4(), name: 'salsa blanca' },
        { id: uuidv4(), name: 'bolognesa' },
        { id: uuidv4(), name: 'nuez noscada' },
        { id: uuidv4(), name: 'aceite' },
        { id: uuidv4(), name: 'queso cremoso' },
        { id: uuidv4(), name: 'queso barra' },
        { id: uuidv4(), name: 'queso pategras' },
        { id: uuidv4(), name: 'maizena' },
        { id: uuidv4(), name: 'cebolla' },
        { id: uuidv4(), name: 'cebolla de verdeo' },
        { id: uuidv4(), name: 'champignones' },
        { id: uuidv4(), name: 'hongos secos' },
        { id: uuidv4(), name: 'queso roquefort' },
        { id: uuidv4(), name: 'carne de lomo' },
        { id: uuidv4(), name: 'carne de nalga' },
        { id: uuidv4(), name: 'pollo' },
        { id: uuidv4(), name: 'pescado merluza' },
        { id: uuidv4(), name: 'pescado salmon' },
        { id: uuidv4(), name: 'pescado trucha' },
        { id: uuidv4(), name: 'mariscos varios' },
        { id: uuidv4(), name: 'marisco mejillon' },
        { id: uuidv4(), name: 'marisco langostino' },
        { id: uuidv4(), name: 'marisco camaron' },
        { id: uuidv4(), name: 'marisco raba' },
        { id: uuidv4(), name: 'pan rallado' },
        { id: uuidv4(), name: 'perejil' },
        { id: uuidv4(), name: 'carne de matambre' },
      ],
      showIngredients: false,
    };
  }

  componentDidMount() {
    console.log('component mounted!!!!');
  }

  componentDidUpdate() {
    console.log('component updated!');
  }

  // TO SHOW INGREDIENTS
  toggleIngredientsHandler = () => {
    const doesShow = this.state.showIngredients;
    this.setState({ showIngredients: !doesShow });
  };

  //TO DELETE INGREDIENTS
  deleteIngredientsHandler = (id) => {
    const updatedIngredients = this.state.ingredients.filter((ingr) => ingr.id !== id);
    this.setState({ ingredients: updatedIngredients });
  };

  //TO SORT ALPHABETICALLY
  sortAlphabeticallyHandler = () => {};

  render() {
    let ingredients = null;
    if (this.state.showIngredients) {
      ingredients = (
        <div>
          {this.state.ingredients.map((ingrmap) => {
            return (
              <Ingredients
                click={() => this.deleteIngredientsHandler(ingrmap.id)}
                ingrprop={ingrmap.name}
                key={ingrmap.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <button className="btn" onClick={this.toggleIngredientsHandler}>
          show ingredients!
        </button>

        {ingredients}
      </div>
    );
  }
}

export default IngredientList;
