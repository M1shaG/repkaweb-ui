import { Layout } from "antd";
import { Link } from 'react-router-dom';
import AppHeader from "../components/AppHeader.jsx";

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  lineHeight: '40px',
  color: '#fff',
  backgroundColor: '#2d2d2d',
}

const layoutStyle = {
  width: '100vw',
  minHeight: '100vh',
  borderRadius: 8,
  overflow: 'hidden'
};

const downloadButton = {
  backgroundColor: '#212121',
  padding: '5px',
  marginLeft: '5px',
  color: '#fff'
};

export default function PageDownload() {
    return (
        <Layout style={layoutStyle}>

            <AppHeader />

            <Content style={contentStyle}>
              <div>Latest version:<Link style={downloadButton} to="">DOWLOAND 1.0.0</Link></div>
            </Content>
            
        </Layout>
    )
}