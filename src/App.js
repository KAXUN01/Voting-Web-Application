import React from 'react';
import './App.css';
import Voting from './component/voting';

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title glitch" >Football Players Voting</h1>
      <Voting />
    </div>
  );
};

export default App;