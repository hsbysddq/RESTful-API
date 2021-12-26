import 'antd/dist/antd.css';
import { Button, Table, Modal, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    const [isEditing, setIsEditing] = useState(false)
    const [editingPlayer, setEditingPlayer] = useState(null)

    const onEditPlayer = (record) => {
        setIsEditing(true);
        setEditingPlayer({...record})
    };
    
    const resetEditing = () => {
        setIsEditing(false);
        setEditingPlayer(null)
    }

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
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
                return (
                    <>
                        <Input
                        autoFocus
                        placeholder='search username in here'
                        value={selectedKeys[0]}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                            confirm({ closeDropdown: false });
                        }}
                        onPressEnter={() => {
                            confirm()
                        }}
                        onBlur={() => {
                            confirm()
                        }}
                        ></Input>
                        <Button
                        onClick={() => {
                            confirm();
                        }}
                        type='primary'
                        >
                        Search
                        </Button>
                        <Button
                        onClick={() => {
                        clearFilters();
                        }}
                        type='danger'
                        >
                        Reset
                        </Button>
                    </>
                );
                },
                filterIcon: () => {
                    return <SearchOutlined />;
                },
                onFilter: (value, record) =>{
                    return record.username.toLowerCase().includes(value.toLowerCase());
                },
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
            return (
                <>
                    <Input
                    autoFocus
                    placeholder='search email in here'
                    value={selectedKeys[0]}
                    onChange={(e) => {
                        setSelectedKeys(e.target.value ? [e.target.value] : []);
                        confirm({ closeDropdown: false });
                    }}
                    onPressEnter={() => {
                        confirm()
                    }}
                    onBlur={() => {
                        confirm()
                    }}
                    ></Input>
                    <Button
                    onClick={() => {
                        confirm();
                    }}
                    type='primary'
                    >
                    Search
                    </Button>
                    <Button
                    onClick={() => {
                    clearFilters();
                    }}
                    type='danger'
                    >
                    Reset
                    </Button>
                </>
            );
            },
            filterIcon: () => {
                return <SearchOutlined />;
            },
            onFilter: (value, record) =>{
                return record.email.toLowerCase().includes(value.toLowerCase());
            },
        },
        {
            key: '4',
            title: 'Experience',
            dataIndex: 'experience',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
                return (
                    <>
                        <Input
                        autoFocus
                        placeholder='search experience in here'
                        value={selectedKeys[0]}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                            confirm({ closeDropdown: false });
                        }}
                        onPressEnter={() => {
                            confirm()
                        }}
                        onBlur={() => {
                            confirm()
                        }}
                        ></Input>
                        <Button
                        onClick={() => {
                            confirm();
                        }}
                        type='primary'
                        >
                        Search
                        </Button>
                        <Button
                        onClick={() => {
                        clearFilters();
                        }}
                        type='danger'
                        >
                        Reset
                        </Button>
                    </>
                );
                },
                filterIcon: () => {
                    return <SearchOutlined />;
                },
                onFilter: (value, record) =>{
                    return record.experience.toLowerCase().includes(value.toLowerCase());
                },
        },
        {
            key: '5',
            title: 'Level',
            dataIndex: 'level',
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => {
                return (
                    <>
                        <Input
                        autoFocus
                        placeholder='search level in here'
                        value={selectedKeys[0]}
                        onChange={(e) => {
                            setSelectedKeys(e.target.value ? [e.target.value] : []);
                            confirm({ closeDropdown: false });
                        }}
                        onPressEnter={() => {
                            confirm()
                        }}
                        onBlur={() => {
                            confirm()
                        }}
                        ></Input>
                        <Button
                        onClick={() => {
                            confirm();
                        }}
                        type='primary'
                        >
                        Search
                        </Button>
                        <Button
                        onClick={() => {
                        clearFilters();
                        }}
                        type='danger'
                        >
                        Reset
                        </Button>
                    </>
                );
                },
                filterIcon: () => {
                    return <SearchOutlined />;
                },
                onFilter: (value, record) =>{
                    return record.level.toLowerCase().includes(value.toLowerCase());
                },
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
                props.setPlayers( (pre) => {
                return pre.filter(player => player.id != record.id);
                });
            }
            })
            
        };

    return (
        <div className="App">
            <header className="App-header">
                <h2 style={{ marginBottom: 20 }} > List data player</h2>
                <Button type='primary' style={{ marginRight: 440, marginBottom: 15 }}>
                <Link
                    style={{  textDecoration: 'none', color: 'fff' }}
                    to={`/player`}
                >
                    Create player
                </Link>
                </Button>
                <Table
                columns={columns}
                dataSource={props.players}
                >
                </Table>
                    <Modal
                        title= "Edit Player"
                        visible= {isEditing}
                        okText= "Save"
                        onCancel= { () => {
                            resetEditing()
                        }}
                        onOk= { () => {
                            props.setPlayers(pre => {
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

export default Home