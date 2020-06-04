import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NavigationBar = () => {
  const history = useHistory();

  const redirectTo = (event) => {
    history.push(event.target.id);
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Foods List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/*<Nav className="mr-auto">*/}
          {/*  <Nav.Link href="#features">Features</Nav.Link>*/}
          {/*  <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
          {/*  <NavDropdown title="More" id="collasible-nav-dropdown">*/}
          {/*    <NavDropdown.Item href="#action/3.1">Recipes</NavDropdown.Item>*/}
          {/*    <NavDropdown.Item href="#action/3.2">Products</NavDropdown.Item>*/}
          {/*    <NavDropdown.Item href="#action/3.3">Foods</NavDropdown.Item>*/}
          {/*    <NavDropdown.Divider />*/}
          {/*    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
          {/*  </NavDropdown>*/}
          {/*</Nav>*/}
          <Nav className="ml-auto">
            <Nav.Link onClick={redirectTo} id="Recipes">
              Recipes
            </Nav.Link>
            <Nav.Link onClick={redirectTo} id="products">
              Products
            </Nav.Link>
            <Nav.Link onClick={redirectTo} id="foods">
              Foods
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
