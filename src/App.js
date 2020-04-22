import React from 'react';
import './App.css';
import Application from "./components/Application";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header className="App-header">
          <h1>
            Wicked Smaht
          </h1>
        </header>
      </div>
    </UserProvider>
  );
}

export default App;
