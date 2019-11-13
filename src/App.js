import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom'
import Homepage from './pages/Homepage';
import ShopPage from './pages/ShopPage';
import Header from './components/Header';

function App() {
  return (
    <div >
      <Header/>
     <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
