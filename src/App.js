import React from 'react';
import './App.css';
import Header from './components/Header/';
import Aside from './components/Aside/';
import Content from './components/Content/';

function App() {
  return (
    <div className="App ">
      <Header/>
      <div className="main__part container">
        <Aside/>
        <Content/>
      </div>
    </div>
  );
}

export default App;
