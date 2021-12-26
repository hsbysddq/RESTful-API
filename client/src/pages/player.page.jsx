import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';

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
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
    };

    const onFinish = (values) => {
        console.log(values);
    };



    return (
        <div className="App">
            <header className="App-header">
            <h3 style={{ marginBottom: 35 }} > Create Player </h3>
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                    {
                        required: true,
                    },
                    ]}
                >
                    <Input
                    onChange={(e) => props.setTmpPlayer({
                        ...props.tmpPlayer,
                        username: e.target.value
                    })}
                    />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                    {
                        type: 'email',
                    },
                    ]}
                >
                    <Input
                    onChange={(e) => props.setTmpPlayer({
                        ...props.tmpPlayer,
                        email: e.target.value
                    })}
                    />
                </Form.Item>

                <Form.Item
                    label="Experience"
                    name="experience"
                    
                >
                    <Input
                    onChange={(e) => props.setTmpPlayer({
                        ...props.tmpPlayer,
                        experience: e.target.value
                    })}
                    />
                </Form.Item>

                <Form.Item
                    label="Level"
                    name="level"
                >
                    <Input
                    onChange={(e) => props.setTmpPlayer({
                        ...props.tmpPlayer,
                        level: e.target.value
                    })}
                    />
                </Form.Item>


                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type='primary'>
                        <Link
                            style={{  textDecoration: 'none', color: 'fff' }}
                            to={`/`}
                            onClick={onCreate}
                        >
                            Submit
                        </Link>
                    </Button>
                </Form.Item>
            </Form>
            </header>
        </div>
    );
};
    


export default Player
