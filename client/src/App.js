import 'antd/dist/antd.css';
import './App.css';
import { Button, Table, Modal, Input, Space } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Highlighter from 'react-highlight-words';

function App() {
  const [isEditing, setIsEditing] = useState(false)
  const [editingPlayer, setEditingPlayer] = useState(null)
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
  ])

  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id'
    },
    {
      key: '2',
      title: 'Username',
      dataIndex: 'username',
      filterMode: 'tree',
      filterSearch: true,
      onFilter: (value, record) => record.username.includes(value),
      width: '30%',
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email'
    },
    {
      key: '4',
      title: 'Experience',
      dataIndex: 'experience'
    },
    {
      key: '5',
      title: 'Level',
      dataIndex: 'level'
    },
    {
      key: '6',
      title: 'Actions',
      render: (record) => {
        return (
        <>
          <EditOutlined 
            onClick={ () => {
              onEditPlayer(record);
            }}
          />

          <DeleteOutlined 
            onClick={ () => {
              onDeletePlayer(record)
            }}
            style={{ color: "red", marginLeft: 12 }} 
          />
        </>
        );
      },
    },
  ];

  const onDeletePlayer = (record) => {
    Modal.confirm({
      title: 'Are you sure, you want to delete player',
      okText: 'Yes',
      okType: 'danger',
      onOk:() => {
        setPlayers( (pre) => {
          return pre.filter(player => player.id != record.id);
        });
      }
    })
    
  };

  const onEditPlayer = (record) => {
    setIsEditing(true);
    setEditingPlayer({...record})
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingPlayer(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Table columns={columns} dataSource={players}></Table>
        <Modal
          title= "Edit Player"
          visible= {isEditing}
          okText= "Save"
          onCancel= { () => {
            resetEditing()
          }}
          onOk= { () => {
            setPlayers(pre => {
              return pre.map(player => {
                if (player.id === editingPlayer.id) {
                  return editingPlayer;
                } else {
                  return player;
                }
              });
            });
            resetEditing();
          }}
        >
          <Input value={editingPlayer?.username} 
            onChange={ (e) => {
              setEditingPlayer(pre => {
                return { ...pre, username:e.target.value };
              });
            }}
          />

          <Input value={editingPlayer?.email} 
            onChange={ (e) => {
              setEditingPlayer(pre => {
                return { ...pre, email:e.target.value };
              });
            }}
          />

          <Input value={editingPlayer?.experience} 
            onChange={ (e) => {
              setEditingPlayer(pre => {
                return { ...pre, experience:e.target.value };
              });
            }}
          />

          <Input value={editingPlayer?.level} 
            onChange={ (e) => {
              setEditingPlayer(pre => {
                return { ...pre, level:e.target.value };
              });
            }}
          />
        </Modal>
      </header>
    </div>
  );
}

{/* <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<Player />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode> */}

export default App;
