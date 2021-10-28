import CompanyLogo from 'companyLogo';
import React from 'react';

let Portal = (props) => {
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
    </div>
  );
};
export default Portal;
