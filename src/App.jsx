import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Foods from './Components/Foods';
import AddFoods from './Components/AddFoods';
import Pistolete from './Components/Pistolete';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [{ id: uuidv4(), name: null }],
      showFood: false,
    };
  }

  componentDidMount() {
    console.log('component mounted!!!!');
  }

  componentDidUpdate() {
    console.log('component updated!');
  }

  // TO SHOW FOOD
  toggleFoodHandler = () => {
    const doesShow = this.state.showFood;
    this.setState({ showFood: !doesShow });
  };

  //TO DELETE FOOD
  deleteFoodHandler = (name) => {
    const updatedFoods = this.state.foods.filter((food) => food.name !== name);
    this.setState({ foods: updatedFoods });
  };

  //TO ADD FOOD
  addFoodHandler = (food) => {
    let foods = [...this.state.foods, food];
    this.setState({
      foods: foods,
    });
  };

  render() {
    let foods = null;
    if (this.state.showFood) {
      foods = (
        <div>
          {this.state.foods.map((foodPito) => {
            return (
              <Foods
                click={() => this.deleteFoodHandler(foodPito.name)}
                pasta={foodPito.name}
                pescado={foodPito.name}
                carne={foodPito.name}
                aves={foodPito.name}
                key={foodPito.id}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <AddFoods addFood={this.addFoodHandler} />
        <button onClick={this.toggleFoodHandler}>show food</button>
        {foods}
        <Pistolete />
      </div>
    );
  }
}
export default App;
