import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/header/Header';
import SignInSignUp from './pages/SignInSignUp';
import { auth } from './firebase/firebase';

class App extends React.Component {

  state = {
    currentUser:null
  }

  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
     this.setState({currentUser:user})
     
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
  return (
    <div >
      <Header currentUser={this.state.currentUser} />
     <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/sign" component={SignInSignUp} />
      </Switch>
    </div>
  );
  }
}

export default App;
