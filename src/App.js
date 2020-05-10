import React from "react";
import "./App.css";
import HomePage from "./pages/homepage";
import ShopPage from "./pages/shop page/shopPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './components/header/header.js';
import Registration from "./components/registration/registration";
import {auth, createUserProfileDocument} from "./firebase/firebase";



class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser: null
    }
  } 
  unsubscribeFromAuth= null;
  
  componentDidMount(){
  this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser:{
            id: snapShot.id,
            ...snapShot.data()
          }
        }, ()=>{console.log(snapShot.data())}
        );
      });
    }
 
    this.setState({currentUser:userAuth})
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
