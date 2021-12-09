import React, { useCallback, useRef } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';

let Login = (props) => {
  let { db } = props;
  let emailRef = useRef();
  let passwordRef = useRef();

  let enterPortal = useCallback(async () => {
    let users = collection(db, 'users');
    let ul = await getDocs(users);
    let userList = ul.docs.map((doc) => doc.data());
    let user;
    userList.map((u) => {
      if (u.email === emailRef.current && u.password === passwordRef.current) {
        user = u;
        props.history.push('/portal/');
        return;
      }
    });
    if (!user) {
      alert('Email / Password combination is incorrect');
    }
  }, [props.history, db]);

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
              onChange={(e) => {
                emailRef.current = e.target.value;
              }}
              autoComplete="off"
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
              onChange={(e) => {
                passwordRef.current = e.target.value;
              }}
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
