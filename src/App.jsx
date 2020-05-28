import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
// Components
import MainContainer from './Components/MainContainer';
import NavBar from './Components/NavBar';
// Views
import ProductsPage from './Views/Products';
import FoodList from './Views/Foods';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <NavBar />
          <MainContainer>
            <Switch>
              <Route path="/products">
                <ProductsPage />
              </Route>
              <Route path="/foods">
                <FoodList />
              </Route>
              <Redirect from="*" to="/products" />
            </Switch>
          </MainContainer>
        </Router>
      </Fragment>
    );
  }
}

export default App;
