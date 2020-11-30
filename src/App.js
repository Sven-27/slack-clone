import React from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
      </div>
    {/**React-Router -> chat screen */}
    </div>
  );
}

export default App;
