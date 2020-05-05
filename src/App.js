import React from "react";
import "./App.css";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop page/shopPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/header/header.js';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
