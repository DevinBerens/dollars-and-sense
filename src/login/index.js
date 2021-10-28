import React, { useCallback } from 'react';
import CompanyLogo from 'companyLogo';

let Login = (props) => {
  let enterPortal = useCallback(() => {
    //TODO: handle logic for user auth
    props.history.push('/portal/');
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        background: '#1f2833',
        margin: '0',
      }}
    >
      <CompanyLogo />
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            background: '#c5c6c7',
            flexDirection: 'column',
            padding: '15px',
            borderRadius: '3px',
          }}
        >
          <label
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            Email:
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              style={{ background: '#ffffff' }}
            />
          </label>
          <label style={{ margin: '20px 0' }}>
            Password:
            <input
              style={{
                marginLeft: '10px',
                background: '#ffffff',
              }}
              type="password"
              name="password"
              placeholder="Enter password"
            />
          </label>
          <div
            style={{
              cursor: 'pointer',
              padding: '5px 10px',
              border: '1px solid #000000',
              color: '#1f2833',
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
              background: '#66fcf1',
            }}
            onClick={enterPortal}
          >
            Login
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
