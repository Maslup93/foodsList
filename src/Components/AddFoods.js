import React, { Component } from 'react'

 class AddFoods extends Component {
   state={
     name: null
   }

   handleChange = (event)=>{
   this.setState({
     [event.target.id]: event.target.value
   })
   }

   handleSubmit =(event)=> {
  event.preventDefault();
  this.props.addFood(this.state);
   }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} key={this.props.key}>
          <label htmlFor="name">Food:</label>
          <input type="text" id="name" onChange={this.handleChange} placeholder="Add Food..."/>
          <button>submit</button>
        </form>
      </div>
    )
  }
}
export default AddFoods;