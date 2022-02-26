import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import FocusScreen from './screens/FocusScreen';
import ListScreen from './screens/ListScreen';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink exact to="/" activeStyle={{ fontWeight: 'bold' }}>
          List
        </NavLink>{' '}
        -{' '}
        <NavLink to="/focus" activeStyle={{ fontWeight: 'bold' }}>
          Focus
        </NavLink>
      </nav>
      <br />
      <Switch>
        <Route exact path="/">
          <ListScreen />
        </Route>
        <Route path="/focus">
          <FocusScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
