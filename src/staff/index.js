import React from 'react';
import CompanyLogo from 'companyLogo';

let Staff = (props) => {
  let managers = [
    {
      name: 'Alex Smith',
      phoneNumber: '736-485-2341',
      email: 'smithalex17@gmail.com',
    },
    {
      name: 'Aaron Cooper',
      phoneNumber: '748-234-8758',
      email: 'aacoop12@gmail.com',
    },
    {
      name: 'Tina Woods',
      phoneNumber: '542-726-9823',
      email: 'tinaw321@gmail.com',
    },
  ];
  let staff = [
    {
      name: 'Bradley Teal',
      phoneNumber: '758-123-8923',
      email: 'bradleyteal@gmail.com',
    },
    {
      name: 'Justin Fox',
      phoneNumber: '796-853-9283',
      email: 'justinfox3@gmail.com',
    },
    {
      name: 'Jamie Wolfe',
      phoneNumber: '897-982-2262',
      email: 'jameswolfey@gmail.com',
    },
    {
      name: 'Chad Harris',
      phoneNumber: '725-664-8256',
      email: 'chad2real@gmail.com',
    },
    {
      name: 'Brittany Peterson',
      phoneNumber: '856-858-9920',
      email: 'brittpete@gmail.com',
    },
  ];
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div
        style={{
          color: '#ffffff',
          display: 'flex',
          flex: '1 1 auto',
          width: '80%',
          margin: '125px 100px 25px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontSize: '28px',
              marginBottom: '40px',
            }}
          >
            Applebee's Staff
          </div>
          <div
            style={{
              fontSize: '24px',
              marginBottom: '15px',
              borderBottom: '1px solid #ffffff',
              display: 'flex',
            }}
          >
            Managers
          </div>
          {managers.map((m) => (
            <div
              key={m}
              style={{
                display: 'flex',
                marginBottom: '20px',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '18px' }}>{m.name}</div>
              <div style={{ fontSize: '14px', marginTop: '5px' }}>
                <div style={{ display: 'flex' }}>{m.phoneNumber}</div>
                <div style={{ display: 'flex' }}>{m.email}</div>
              </div>
            </div>
          ))}
          <div
            style={{
              fontSize: '24px',
              marginTop: '20px',
              marginBottom: '15px',
              borderBottom: '1px solid #ffffff',
            }}
          >
            Staff
          </div>
          {staff.map((s) => (
            <div
              key={s}
              style={{
                display: 'flex',
                marginBottom: '20px',
                flexDirection: 'column',
              }}
            >
              <div style={{ fontSize: '18px' }}>{s.name}</div>
              <div style={{ fontSize: '14px', marginTop: '5px' }}>
                <div style={{ display: 'flex', marginRight: '10px' }}>
                  {s.phoneNumber}
                </div>
                <div style={{ display: 'flex' }}>{s.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Staff;
