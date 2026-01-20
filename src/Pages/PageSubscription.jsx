import { Layout } from "antd";
import AppHeader from "../components/AppHeader.jsx";

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  lineHeight: '30px', 
  color: '#fff',
  backgroundColor: '#2d2d2d'
}

const layoutStyle = {
  width: '100vw',
  minHeight: '100vh',
  borderRadius: 8,
  overflow: 'hidden'
};

const SubscriptionContent = {
    margin: '10px auto',
    maxWidth: '160px',
    backgroundColor: '#212121',
    fontSize: '16px'
};

const SubscriptionCancel = {
  color: '#595959',
  fontWeight: '600'
};

export default function PageSubscription() {
    return (
        <Layout style={layoutStyle}>

            <AppHeader />

            <Content style={contentStyle}>
              <div style={SubscriptionContent}>

                  <div>Account type: free</div>
                  <div                  
                  onMouseEnter={e => (e.currentTarget.style.color = "#bbb")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#fff")}>Subscribe</div>

                  <div style={SubscriptionCancel}>Cancel Subscription</div>

              </div>

            </Content>

        </Layout>
    )
}