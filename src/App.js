import React from 'react';
import './App.css';
import Header from './components/Header/';
import Aside from './components/Aside/';
import Profile from './components/Profile/';
import DialogCont from './components/Dialog/container';
import News from './components/News/';
import Music from './components/Music/';
import Settings from './components/Settings/';
import {Route} from "react-router-dom/umd/react-router-dom";
import FindUserCont from "./components/FindUser/container";

const App = () => {
    return (

        <div className="App ">
            <Header/>
            <div className="main__part container">
                <Aside />
                <Route path="/dialogs"
                       render={() => <DialogCont />}/>
                <Route path="/profile" render={() => <Profile />}/>
                <Route path="/users" render={() => <FindUserCont />}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    )
        ;
}

export default App;
