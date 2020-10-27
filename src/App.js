// What do we need to build?
// 1. header, 2. menu item, 3. directory-menu,


import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path= '/shop' component={ShopPage}/>   
      </Switch>
    </div>
  );
}

export default App;
