import { useLocation } from 'react-router-dom';

const headerText = {
  display: 'flex',
  flex: 7,
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  backgroundColor: '#2d2d2d',
  fontWeight: '400',
  fontSize: 24
}

export default function HeaderText() {

    const location = useLocation().pathname;
    
    var page;
    
    if(location == "/Subscription") {
        page = "Subscription management"
    } else if(location == "/Download" || location == "/") {
        page = "Dowloand client"
    }

    return <div style = {headerText}>R.E.P.K.A - {page}</div>;
}