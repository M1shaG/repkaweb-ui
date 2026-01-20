import { Layout } from 'antd';
import HeaderLink from './HeaderLink.jsx'
import HeaderText from './HeaderText.jsx';
const { Header } = Layout;

const innerHeader = {
  height: '100%',
  display: 'flex',
  flex: 3,
  backgroundColor: '#212121',
  color: "#fff"
};

const styleHeader = {
  padding: '0',
  height: 100,
  display: 'flex',
  flexDirection: 'column',
  lineHeight: 'normal',
  borderBottom: '20px solid #212121',
  boxSizing: 'border-box'             
};

export default function AppHeader() {
    return (
        <Header style={styleHeader}>

            <div style={innerHeader}>
              <HeaderLink to ="/Subscription">Subscription management</HeaderLink>
              <HeaderLink to ="/Download">Dowloand client</HeaderLink>
              <HeaderLink to="/Login" last>Logout</HeaderLink>
            </div>

            <HeaderText />

        </Header>
    )
}