import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";

let App = function (props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        {/* <Friends state={props.state.sidebar} /> */}
        <div className="app-wrapper-content">
          <Routes>
            <Route path='/Profile' element={<Profile />} />
            <Route path='/Dialogs/*' element={<DialogsContainer />} />
            <Route path='/News' element={<News/>} />
            <Route path='/Music' element={<Music/>} />
            <Route path='/Users' element={<UsersContainer />} />
            <Route path='/Settings' element={<Settings/>} />
          </Routes>
        </div>
        <div className="app-wrapper-friends">
          <Friends state={props.state.sidebar} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
