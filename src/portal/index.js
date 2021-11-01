import CompanyLogo from 'companyLogo';
import React from 'react';

let Portal = (props) => {
  let boxStyle = {
    background: '#ffffff',
    width: '175px',
    height: '175px',
    display: 'flex',
    borderRadius: '6px',
    alignItems: 'center',
    margin: '15px',
    cursor: 'pointer',
  };
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div>
        <div
          style={{
            display: 'flex',
            width: '80vh',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}
        >
          <div style={boxStyle}>Manage Revenue & Expenses</div>
          <div style={boxStyle}>Manage Food Information</div>
          <div style={boxStyle}>Customer Order Information</div>
          <div style={boxStyle}>Manage Revenue & Expenses</div>
          <div style={boxStyle}>Manage Food Information</div>
          <div style={boxStyle}>Customer Order Information</div>
        </div>
      </div>
    </div>
  );
};
export default Portal;
