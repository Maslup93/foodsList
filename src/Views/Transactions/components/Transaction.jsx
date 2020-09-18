import React from 'react';

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.position}</td>
      <td>{props.name}</td>
    </tr>
  );
};

export default Transaction;
