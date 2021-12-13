import './home.css'
import {Button, List, Stack} from '@mui/material';
import {PlayerItem} from '../components/player-item.component';
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
        <div className="container">
        <Stack spacing={5} sx={{ width: 300 }}>
            <div>
            <List dense={true}>
                {
                props.players.map(player => (
                    <PlayerItem key={player.id} username={player.username} email={player.email} id={player.id} onDelete={props.onDelete} />
                ))
                }
            </List>
            </div>
            <Button size="small" variant="contained" className="submit-container">
            <Link
                style={{  textDecoration: 'none', color: '#fff' }}
                to={`/player`}
            >
                Create player
            </Link>
            </Button>
        </Stack>
        </div>
    )
}

export default Home