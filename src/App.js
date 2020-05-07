import React from "react";
import "./App.css";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop page/shopPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/header/header.js';
import Registration from "./components/registration/registration";
import {auth} from "./firebase/firebase";



class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  } 
  unsubscribeFromAuth= null;
  componentDidMount(){
  this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>
      {this.setState({currentUser:user});
      console.log(user);
    });
  }

  componentWillUnmount(){
   this.unsubscribeFromAuth();  
  }


  render(){
    return (
      <BrowserRouter>
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/registration" component={Registration}></Route>
        </Switch>
      </BrowserRouter>
    );
    }
 
}

export default App;
