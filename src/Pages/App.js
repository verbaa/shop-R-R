import React from 'react';
import {Product} from "./ProductList";
import {ProductDetail} from "./ProductDetails/ProductDetail";
import {Checkout} from "./Checkout/Checkout";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";





function App() {
  return (
  <Router>
    <Switch>
      <Route path='/' exact>
        <Product/>
      </Route>
      <Route path='/checkout' exact>
        <Checkout/>
      </Route>
      <Route path='/detail' >
        <ProductDetail/>
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
