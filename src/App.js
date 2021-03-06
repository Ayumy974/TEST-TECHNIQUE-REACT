import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import UsersList from './pages/UsersList';
import Profil from './pages/Profil';

import './app.css';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path='/' component={UsersList}></Route>
          <Route exact path='/profil/:id' component={Profil}></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
