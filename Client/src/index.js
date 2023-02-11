import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import SignUp from './components/Start/signup';
import SignIn from './components/Start/signin';
import PhilPage from './components/Philanthrophis/philPage';
import Search from './components/Philanthrophis/search';
import Video from './components/Philanthrophis/video';
import RoomPage from './components/Room/RoomPage';
import Home from './components/Start/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/philPropile" element={<PhilPage />} />
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/video" element={<Video/>}/>
      <Route path='/room/:roomID' element={<RoomPage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
