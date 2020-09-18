import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
// import PropTypes from 'prop-types';

const MyVerticallyCenteredModal = (props) => {
  const [itemState, setItemState] = useState({ item: '' });

  const onChange = (e) => setItemState({ item: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    props.addItem(itemState.item);
    setItemState({ item: '' });
  };

  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Transaction</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Transaction Type</Form.Label>
            <Form.Control as="select">
              <option>Table</option>
              <option>Take Away/Delivery</option>
              <option>Expenses</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type The Price Here..."
              value={itemState.item}
              onChange={onChange}
              onSubmit={onSubmit}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button type="submit" onClick={onSubmit}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const PopUp = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Transaction
      </Button>

      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
};

// PopUp.propTypes = {
//   addItem: PropTypes.func.isRequired,
// };

export default PopUp;
