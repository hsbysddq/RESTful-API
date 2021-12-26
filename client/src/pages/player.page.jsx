import { AutoComplete, Button, Form } from 'antd';
import { Anchor } from 'antd';
import './player.css'

function Player (props) {

    const onCreate = () => {
        props.setPlayers([
            ...props.players,
            {
                id: Date.now(),
                username: props.tmpPlayer.username,
                email: props.tmpPlayer.email,
                experience: props.tmpPlayer.experience,
                level: props.tmpPlayer.level
            }
        ])
        props.setTmpPlayer({
            username: '',
            email: '',
            experienc: '',
            level: '',
            
        })
    }

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    const { Link } = Anchor;



    return (
        <div className='wrapper'>
            <AutoComplete
                style={{ width: 200 }}
                placeholder="input here"
            />
            <br />
            <br />
            <AutoComplete
                style={{ width: 200 }}
                placeholder="control mode"
            />
            <br />
            <br />
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="link" htmlType="submit">
                
                Submit
                </Button>
            </Form.Item>
        </div>
    );
}
    


export default Player
