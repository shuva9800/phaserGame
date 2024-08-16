import React from 'react';
import GameCanvas from './components/GameCanvas';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <GameCanvas />
      <div id="right-panel">
        <button id="start-session-button">Start Session</button>
        <div id="timer-text">Time: 20</div>
        <ul id="session-list"></ul>
      </div>
    </div>
  );
};

export default App;
