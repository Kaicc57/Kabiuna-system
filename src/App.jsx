import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <h1>Welcome to the Kabiuna System</h1>
        </Route>
        {/* Add more routes here */}
      </Switch>
    </Router>
  );
}

export default App;
