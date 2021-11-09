import React from 'react';
import { Link } from 'react-router-dom';

let CompanyLogo = (props) => {
  return (
    <Link
      style={{
        position: 'absolute',
        top: '25px',
        left: '25px',
        fontSize: '28px',
        color: '#c5c6c7',
        cursor: 'pointer',
        textDecoration: 'none',
      }}
      to="/portal/"
    >
      Dollars & Sense
    </Link>
  );
};
export default CompanyLogo;
