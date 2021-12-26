import 'antd/dist/antd.css';
import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import  Home  from './pages/home.page';
import  Player  from './pages/player.page';

function App() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: 'hasby',
      email: 'hasby@gmail.com',
      experience: '1',
      level: '1'
    },
    {
      id: 2,
      username: 'ubaddi',
      email: 'ubaddi@gmail.com',
      experience: '2',
      level: '2'
    },
    {
      id: 3,
      username: 'fatah',
      email: 'fatah@gmail.com',
      experience: '3',
      level: '3'
    },
    {
      id: 4,
      username: 'nashrullah',
      email: 'nashrullah@gmail.com',
      experience: '4',
      level: '4'
    },
    {
      id: 5,
      username: 'mahendra',
      email: 'mahendra@gmail.com',
      experience: '5',
      level: '5'
    },
  ])


  return (
    <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home players={players} setPlayers={setPlayers} />} />
        <Route path="/player" element={<Player players={players} setPlayers={setPlayers} />} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
  );
}



export default App;
