import CompanyLogo from 'companyLogo';
import React from 'react';
import { Link } from 'react-router-dom';

let Portal = props => {
  let boxStyle = {
    background: '#ffffff',
    width: '150px',
    height: '150px',
    display: 'flex',
    borderRadius: '6px',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '20px 10px',
    padding: '10px',
    fontSize: '20px',
    color: '#000000',
    textDecoration: 'none'
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
            flexWrap: 'wrap'
          }}
        >
          <Link to="/financials/" style={boxStyle}>
            Manage Revenue & Expenses
          </Link>
          <Link to="/inventory/" style={boxStyle}>
            Manage Food Information
          </Link>
          <Link to="/orders/" style={boxStyle}>
            Customer Order Information
          </Link>
          <div style={boxStyle}>Button 4</div>
          <div style={boxStyle}>Button 5</div>
          <div style={boxStyle}>Button 6</div>
        </div>
      </div>
    </div>
  );
};
export default Portal;
