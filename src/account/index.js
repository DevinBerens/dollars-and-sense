import React from 'react';
import CompanyLogo from 'companyLogo';

let Account = (props) => {
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff' }}>
        <div style={{ fontSize: '24px', display: 'flex' }}>
          Applebees Account Page
        </div>
      </div>
    </div>
  );
};
export default Account;
