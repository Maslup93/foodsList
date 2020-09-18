import React, { Component } from 'react';
import TransList from './components/TransList';
import PopUp from './components/PopUp';

class TransactionsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  //TO ADD ITEMS
  addItemHandler = (itemName) => {
    const newItem = { item: itemName };
    const newItems = [...this.state.list, newItem];
    newItems.sort((a, b) => (a.item > b.item ? 1 : -1));
    this.setState({
      list: newItems,
    });
  };

  render() {
    return (
      <div>
        <PopUp addItem={this.addItemHandler} />
        <TransList items={this.state.list} />
      </div>
    );
  }
}
export default TransactionsPage;
