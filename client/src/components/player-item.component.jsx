
import { Link } from 'react-router-dom'
import styles from './player-item.module.css'

export const PlayerItem = (props) => {
    return (
        <div className={styles.container}>
            <ListItem>
                <ListItemText primary={`${props.username} (${props.email})`} />
            </ListItem>
            <IconButton aria-label="delete" onClick={props.onDelete(props.id)} color="primary" >
                <Delete fontSize="small"/>
            </IconButton>
            <Button aria-label="edit" variant="contained" color="primary">
            <Link
                style={{  textDecoration: 'none', color: '#fff' }}
                to={`/edit`}
            >
                Edit
            </Link>
            </Button>
        </div>
    )
}