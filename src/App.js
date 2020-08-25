import React from 'react';
import logo from './logo.svg';
import './App.css';
import EtherScan from './components/EtherScan.js'
import Timer from './components/Timer';
import moment from 'moment'

function App() {
  return (
    <div className="App">
        <EtherScan />
        <Timer tob_nextRebaseDate={moment(new Date(1598399499000))} tob_lastExchangeRate={6.773908} tob_canRebase={false} />

    </div>
  );
}

export default App;
