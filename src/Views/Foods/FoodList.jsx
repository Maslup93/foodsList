import React, { Component } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import Foods from './Components/Foods';
import AddFoods from './Components/AddFoods';

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: [],
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
  deleteFoodHandler = (id) => {
    const updatedFoods = this.state.foods.filter((food) => food.id !== id);
    this.setState({ foods: updatedFoods });
  };

  //TO ADD FOOD
  addFoodHandler = (foodName) => {
    const newFood = { name: foodName, id: uuidv4() };
    const newFoods = [...this.state.foods, newFood];
    newFoods.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      foods: newFoods,
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
                click={() => this.deleteFoodHandler(foodPito.id)}
                pasta={foodPito.name}
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
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle
                onClick={this.toggleFoodHandler}
                as={Button}
                variant="link"
                eventKey="0"
              >
                Show Food
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{foods}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}
export default FoodList;
