import './App.css';
// src/App.js
// App.js
import React from 'react';
import BuildingOccupancy from './components/BuildingOccupancy';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gestion d'occupation du bâtiment</h1>
      </header>
      <main>
        <BuildingOccupancy />
      </main>
    </div>
  );
};

export default App;
