import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><div>List view</div></Route>
        <Route path="/focus"><div>Focus view</div></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
