import React, { Component } from 'react'
import Foods from './Components/Foods';
import AddFoods from './Components/AddFoods'
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

addFood= (foods)=>{
console.log(foods)
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
        <AddFoods addFood={this.addFood}/>
        <button onClick={this.toggleFoodHandler}>show food</button>
        
        
        {foods}
      </div>
    )
    }

 }
export default App;
