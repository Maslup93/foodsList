import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DropdownButton = (props) => {
  return (
    <div>
      <Form>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select">
            <option>Mesas</option>
            <option>Delivery/Takeaway</option>
            <option>Gastos</option>
          </Form.Control>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Price" onChange={props.change} />
          </Form.Group>
        </Form.Group>
      </Form>
    </div>
  );
};

DropdownButton.propTypes = {
  change: PropTypes.func.isRequired,
};

export default DropdownButton;
