import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const baseItem = {
  flex: 1,
  borderRight: '3px #2e2e2e solid',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '0.2s'
};

const hoverItem = {
  color: '#aaa'
};

const activeItem = {
  color: '#aaa'
};

export default function HeaderLink({ to, children, last }) {
  const [hovered, setHovered] = useState(false);
  
  const location = useLocation();

  var isActive = location.pathname == to;

  return (
    <Link
      to={to}
      style={{
        ...baseItem,
        ...(hovered ? hoverItem : {}),
        ...(isActive ? activeItem : {}),
        ...(last ? { borderRight: 'none' } : {})
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
      }}
    >
      {children}
    </Link>
  );
}