import React from 'react';
import CompanyLogo from 'companyLogo';
import { Link } from 'react-router-dom';


let Financials = (props) => {

  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff', fontSize: '50px', marginBottom: '50px' }}>Revenue and Expenses Management</div>
      <Link to="/financials/income" style={{ textDecoration: "none", color: '#ffffff', fontSize: '30px', marginBottom: '30px'}}>Income </Link>
      <Link to="/financials/expenses" style={{ textDecoration: "none", color: '#ffffff', fontSize: '30px', marginBottom: '30px'}}>Expenses </Link>
      <Link to="/financials/profit" style={{ textDecoration: "none", color: '#ffffff', fontSize: '30px', marginBottom: '30px'}}>Profit </Link>
      </div>
      
  )
}

export default Financials;