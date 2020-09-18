import React from 'react';
import { Table } from 'react-bootstrap';
import Transaction from './Transaction';

const TransList = (props) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Transaction</th>
            <th>Type of</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => {
            return <Transaction name={item.list} key={item.id} position={index + 1} />;
          })}
        </tbody>
      </Table>
    </div>
  );
};
export default TransList;
