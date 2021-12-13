import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.page";
import { Player } from "./pages/player.page";

const App = () => {
  const [players, setPlayers] = useState([
    {
      id: 1,
      username: 'user',
      email: 'user@gmail.com',
      password: 'Katasandi1'
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@gmail.com',
      password: 'Katasandi12'
    }
  ])
  const [tmpPlayer, setTmpPlayer] = useState({
    username: '',
    email: '',
    password: ''
  })

  const onCreate = () => {
    setPlayers([
      ...players,
      {
        id: Date.now(),
        username: tmpPlayer.username,
        email: tmpPlayer.email,
        password: tmpPlayer.password
      }
    ])
    setTmpPlayer({
      username: '',
      email: '',
      password: ''
    })
  }

  const onDelete = (id) => (e) => {
    const newPlayers = [...players].filter(player => player.id !== id)
    setPlayers(newPlayers)
  }

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home players={players} onDelete={onDelete} />} />
          <Route path="/player" element={<Player onCreate={onCreate} setTmpPlayer={setTmpPlayer} tmpPlayer={tmpPlayer} />} />
          <Route path="invoices" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
}

export default App;