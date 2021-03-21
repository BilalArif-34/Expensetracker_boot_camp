import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TransectionHistory} from './components/TransectionHistory'
import {AddTransection} from './components/AddTransection'
import {GlobalProvider} from './context/GlobalState'



function App() {
  return (
    <GlobalProvider>
            <Header /> 
        <div className="container"> 
            <Balance />
            <AccountSummary />
            <TransectionHistory />
            <AddTransection />
            <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </div>
    </GlobalProvider>
  );
}

export default App;
