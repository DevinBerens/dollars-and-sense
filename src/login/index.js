import React, { useCallback } from 'react';

let Login = (props) => {
  let enterPortal = useCallback(() => {
    //TODO: handle logic for user auth
    props.history.push('/portal/');
  }, []);

  return (
    <div className="indexWrapper">
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            display: 'flex',
            background: '#ffffff',
            flexDirection: 'column',
            padding: '30px',
            borderRadius: '6px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '32px',
              marginBottom: '30px',
              color: '#1f2833',
            }}
          >
            Dollars & Sense
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '10px',
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              autoFocus={true}
              style={{
                borderRadius: '3px',
                background: '#ffffff',
                marginBottom: '10px',
                height: '25px',
                border: '1px solid gray',
                paddingLeft: '5px',
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              style={{
                borderRadius: '3px',
                background: '#ffffff',
                height: '25px',
                border: '1px solid gray',
                paddingLeft: '5px',
              }}
            />
          </div>
          <div
            style={{
              cursor: 'pointer',
              padding: '5px 10px',
              color: '#ffffff',
              textDecoration: 'none',
              display: 'flex',
              justifyContent: 'center',
              background: '#45a29e',
              borderRadius: '3px',
              marginBottom: '10px',
            }}
            onClick={enterPortal}
          >
            Log In
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              color: 'gray',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Forgot my password
          </div>
        </div>
      </form>
    </div>
  );
};
export default Login;
