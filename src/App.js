import React, { Component } from 'react'
import Foods from './Components/Foods';
import AddFood from './Components/AddFood';
import { v4 as uuidv4 } from 'uuid';

 class App extends Component {
   state= {
    foods: [
      {id: uuidv4(), name:"Fideos"},
      {id: uuidv4(), name:"Merluza"},
      {id: uuidv4(), name:"Tira de asado"},
      {id: uuidv4(), name:"Deshuesado de pollo"}
    ],
    showFood: false
     }

// TO SHOW FOOD

toggleFoodHandler= () => {
  const doesShow = this.state.showFood
  this.setState ({showFood: !doesShow})
}

//TO DELETE FOOD

deleteFoodHandler= (name) => {
  const updatedFoods= this.state.foods.filter(food=> food.name !== name);
  this.setState({foods:updatedFoods})}

  //TO ADD FOOD

addFoodHandler =(food)=> {
  const newFood = {
    id: uuidv4
  }
this.setState({ foods: [...this.state.foods, newFood]})
}

  render() {
  
    let foods = null;

    if(this.state.showFood) {
      foods = (
        <div>
          {this.state.foods.map ((foodPito) => {
            return <Foods 
            click={()=> this.deleteFoodHandler(foodPito.name)}
            pasta={foodPito.name}
            pescado={foodPito.name}
            carne={foodPito.name}
            aves={foodPito.name}
            key={foodPito.id} />
          })}
        </div>
      )

    }
    return (
      <div>
        <AddFood addFood={this.addFoodHandler}/>
        <button onClick={this.toggleFoodHandler}>show food</button>
        
        
        {foods}
      </div>
    )
    }

 }
export default App;
