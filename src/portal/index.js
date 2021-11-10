import React from 'react';
import CompanyLogo from 'companyLogo';
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
            <div
              style={{
                display: 'flex',
                flex: '1 1 auto',
                margin: '0 25px',
                justifyContent: 'center'
              }}
            >
              Manage Revenue & Expenses
            </div>
          </Link>
          <Link to="/inventory/" style={boxStyle}>
            <div
              style={{
                display: 'flex',
                flex: '1 1 auto',
                margin: '0 25px',
                justifyContent: 'center'
              }}
            >
              Manage Inventory
            </div>
          </Link>
          <Link to="/orders/" style={boxStyle}>
            <div
              style={{
                display: 'flex',
                flex: '1 1 auto',
                margin: '0 25px',
                justifyContent: 'center'
              }}
            >
              Customer Order Information
            </div>
          </Link>
          <Link to="/menu/" style={boxStyle}>
            <div
              style={{
                display: 'flex',
                flex: '1 1 auto',
                margin: '0 25px',
                justifyContent: 'center'
              }}
            >
              Menu
            </div>
          </Link>
          <Link to="/staff/" style={boxStyle}>
            <div
              style={{
                display: 'flex',
                flex: '1 1 auto',
                margin: '0 25px',
                justifyContent: 'center'
              }}
            >
              Staff
            </div>
          </Link>
          <Link to="/account/" style={boxStyle}>
            <div
              style={{
                display: 'flex',
                flex: '1 1 auto',
                margin: '0 25px',
                justifyContent: 'center'
              }}
            >
              Account
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Portal;
