import './edit.css'
import { Button, Stack, TextField } from "@mui/material"
import { Link } from 'react-router-dom'

export const Edit = (props) => {
    return (
        <div className="container">
            <h1>Edit Player</h1>
            <Stack spacing={5} sx={{ width: 300 }}>
                <TextField 
                    id="outlined-basic" 
                    label="Username" 
                    variant="outlined" 
                    className="submit-container" 
                    size="small"
                    onChange={(e) => props.setTmpPlayer({
                        ...props.tmpPlayer,
                        username: e.target.value
                    })}
                    value={props.tmpPlayer.username}
                />

                <TextField 
                    id="outlined-basic" 
                    label="Email" 
                    variant="outlined" 
                    className="submit-container" 
                    size="small"
                    onChange={(e) => props.setTmpPlayer({
                        ...props.tmpPlayer,
                        email: e.target.value
                    })}
                    value={props.tmpPlayer.email}
                />
                
                <Button size="small" variant="contained" className="submit-container">
                <Link
                    style={{  textDecoration: 'none', color: '#fff' }}
                    to={{
                        pathname: `/`,
                    }}
                    onClick={props.onEdit}
                >
                    Submit
                </Link>
                </Button>
            </Stack>
        </div>
    )
}