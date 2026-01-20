import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
import { ConfigProvider, theme} from 'antd';
import { Link } from 'react-router-dom';

const mainLogin = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    flexDirection: 'column'
};

export default function Registration() {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };
  return (
    <ConfigProvider theme={{
        algorithm: theme.darkAlgorithm,
        token: {
            colorPrimary: '#212121',
            colorTextBase: '#fff',
            colorBorder: '#212121'
        }

    }}>

    <div style={mainLogin}>
        <div style={{ marginBottom:'10px'} }>Sign Up</div>
        <Form
        name="login"
        style={{ width: 360 }}
        onFinish={onFinish}
        >
        <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
        >
            <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
        </Form.Item>

        <Form.Item
            name="reppassword"
            rules={[{ required: true, message: 'Please input your Password!' }]}
        >
            <Input prefix={<LockOutlined />} type="password" placeholder="Repeat password" />
        </Form.Item>

        <Form.Item>
            <Button block type="primary" htmlType="submit">
            Create Account
            </Button>

            <div style={{textAlign: 'center', fontSize: '16px'}}>Already have an account?&nbsp;
                <Link to="/Login"style={ {color:'white', fontWeight:'600'} } 
                onMouseEnter={e => (e.currentTarget.style.color = "#bbb")}
                onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
                href="">Sign In</Link>
            </div>

        </Form.Item>
        </Form>
    </div>
    
    </ConfigProvider>
  );
};