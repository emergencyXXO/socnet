import React from 'react';
import './App.css';
import Header from './components/Header/';
import Aside from './components/Aside/';
import Profile from './components/Profile/';
import Dialog from './components/Dialog/';
import News from './components/News/';
import Music from './components/Music/';
import Settings from './components/Settings/';
import {Route} from "react-router-dom/umd/react-router-dom";

const App = (props) => {

    return (

        <div className="App ">
            <Header/>
            <div className="main__part container">
                <Aside friends={props.store.Aside.FriendsData}/>
                <Route path="/dialogs" render={() => <Dialog users={props.store.DialogPage.UserData}
                                                             messages={props.store.DialogPage.MessageData}/>}/>
                <Route path="/profile" render={() => <Profile profilePage={props.store.ProfilePage}

                                                              dispatch={props.dispatch}/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>

    )
        ;
}

export default App;
