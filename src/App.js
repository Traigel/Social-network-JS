import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
          <Route path="/dialogs/*" element={<Dialogs/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/news" element={<News />} />
          <Route path="/music" element={<Music/>} />
          <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
