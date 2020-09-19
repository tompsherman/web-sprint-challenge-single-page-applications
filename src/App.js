import React from "react";
import {Route, Link, Switch} from "react-router-dom";
import Form from "./Form"

const App = () => {
  return (
    <>
      <div className="header">
        <h1>Lambda Eats</h1>
        <p>You can remove this code and create your own header</p>
        <Link to="/"><button className="home">home</button></Link>
        <Link to="/pizza"><button className="order">order</button></Link>
      </div>
    

    <Switch>
      <Route path="/pizza">
        <Form />
      </Route>
      <Route path="/">
        <h1>Home Page</h1>
      </Route>
    </Switch>
    </>
  );
};
export default App;
