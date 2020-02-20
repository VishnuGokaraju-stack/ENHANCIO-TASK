import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import GitHub from './components/GitHub';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router>
          <Route exact path='/' component={GitHub} />
        </Router>
      </div>
    </div>
  );
}

export default App;
