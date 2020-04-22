import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>
            Wicked Smaht
          </h1>
        </header>
      </div>
    </Router>
  );
}

export default App;
