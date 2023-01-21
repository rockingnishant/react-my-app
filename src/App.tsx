import React from 'react';
import './App.css';
import InstallBase from './packages/mono-installbase/Install-base';
import Overview from './frontend/packages/overview/Overview';


function App() {
  return (
    <div className="App">
      <InstallBase name={'nishant'}/>
      <Overview/>
    </div>
  );
}

export default App;
