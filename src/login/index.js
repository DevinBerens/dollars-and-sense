import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';

let Login = props => {
  let enterPortal = useCallback(() => {
    console.log('login button clicked');
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <div style={{ marginBottom: '15px' }}>Test Login</div>
      <Link to={'/portal'} style={{ cursor: 'pointer' }} onClick={enterPortal}>
        Login
      </Link>
    </div>
  );
};
export default Login;
