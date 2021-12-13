import { IconButton, ListItem, ListItemText } from "@mui/material"
import { Delete } from '@mui/icons-material'
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
        </div>
    )
}