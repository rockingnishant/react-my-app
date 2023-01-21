import React from 'react';
import logo from './logo.svg';
import './App.css';
import InstallBase from '../src/frontend/packages/install-base/Install-base';
import Overview from './frontend/packages/overview/Overview';

function App() {
  return (
    <div className="App">
      <InstallBase/>
      <Overview/>
    </div>
  );
}

export default App;
