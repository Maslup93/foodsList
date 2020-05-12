import React, { Component } from "react";

export default class AddFoods extends Component {
    state= {
        food:''
    }

onChange =(event)=> this.setState({[event.target.name]: event.target.value});

onSubmit=(event)=>{
    event.preventDefault();
    this.props.addFood(this.state.food);
    this.setState({food:''});
}

  render() {
    return (
      <form>
        <input type="text" name="food" placeholder="Add Food..." value={this.state.food} onSubmit={this.onSubmit} onChange={this.onChange}/>
        <input type="submit" value="submit" className="btn" />
      </form>
    );
  }
}
