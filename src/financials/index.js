import React from 'react';
import CompanyLogo from 'companyLogo';


let Financials = (props) => {
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff', fontSize: '40px', marginBottom: '50px' }}>Revenue and Expenses Management</div>
      <a href="Income" style={{ textDecoration: "none" }}><div style={{ color: '#ffffff', fontSize: '30px', marginBottom: '30px' }}>Income</div></a>
      <a href="Expenses" style={{ textDecoration: "none" }}><div style={{ color: '#ffffff', fontSize: '30px', marginBottom: '30px' }}>Expenses</div></a>
      <a href="Profit" style={{ textDecoration: "none" }}><div style={{ color: '#ffffff', fontSize: '30px', marginBottom: '30px' }}>Profit</div></a>
      <a href="Quarterly" style={{ textDecoration: "none" }}><div style={{ color: '#ffffff', fontSize: '30px', marginBottom: '30px' }}>Quarterly</div></a>
      <a href="Yearly" style={{ textDecoration: "none" }}><div style={{ color: '#ffffff', fontSize: '30px', marginBottom: '20px' }}>Yearly</div></a>
    </div>
  );

}

export default Financials;
