import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import Item from './Item';

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingList: true,
    };
  }

  toggleShowList = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        showingList: !prevState.showingList,
      };
    });
  };

  render() {
    return (
      <div style={{ marginTop: 15 }}>
        <p>{this.generateItem}</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Concept</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.item.map((item, index) => {
              return (
                <Item
                  click={() => this.props.deleteItemHandler(item.id)}
                  name={item.name}
                  key={item.id}
                  position={index + 1}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

ItemList.propTypes = {
  item: PropTypes.arrayOf(PropTypes.element).isRequired,
  deleteItemHandler: PropTypes.func.isRequired,
};

export default ItemList;
