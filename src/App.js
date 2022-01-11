import { directive } from "@babel/types";
import React from "react";
import SignUp from "./components/signup/index";
import SignIn from "./components/signin/index";
import VerifyEmail from "./containers/pleaseCheckEmail";
import { BrowserRouter as Router, Switch, Route, router } from "react-router-dom";
import Home from "./components/home";
import LayOut from "./components/layout";
import { EmailVerified }  from "./components/api/email_verified"
import { allProducts } from './components/product_items'
import AllProducts from "./components/all_products/index"
import { Col, Row } from 'react-bootstrap';





const App = () => {


  
  return (
    <div>
      <Router>
        <Switch>
          {/* Route eto signup */}
          <Route exact path="/signUp" component = {SignUp}>
            <SignUp />
          </Route>
          {/* Route to signin */}
          <Route exact path="/signIn">
            <SignIn></SignIn>
          </Route>
          {/* Route to verify email */}
          <Route exact path="/please-check-email">
            <VerifyEmail />
          </Route>
          {/* Route to layout and home */}
          <Route exact path="/home">
            <LayOut>
              <Home />
            </LayOut>
          </Route>
          {/* Route to verfiy registered email and send to login */}
           <Route exact path="/verify/:id">
            <EmailVerified />
          </Route>
          <Route exact path ="/allproducts">
           <AllProducts allProducts={allProducts}/>
         </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
