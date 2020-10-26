// What do we need to build?
// 1. header, 2. menu item, 3. directory-menu,


import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>Hats Page!</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path= '/hats' component={HatsPage}/>   
      </Switch>
    </div>
  );
}

export default App;
