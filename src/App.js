import React from 'react';
import './App.css';
import Header from './components/Header/';
import Aside from './components/Aside/';
import Profile from './components/Profile/';
import Dialog from './components/Dialog/';
import News from './components/News/';
import Music from './components/Music/';
import Settings from './components/Settings/';
import {BrowserRouter, Route} from "react-router-dom/umd/react-router-dom";

const App = () => {
        return (
            <BrowserRouter>
                <div className="App ">
                    <Header/>
                    <div className="main__part container">
                        <Aside/>
                        <Route path="/dialogs" component={Dialog}/>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </BrowserRouter>
        )
            ;
    }

export default App;
