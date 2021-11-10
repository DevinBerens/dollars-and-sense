import React from 'react';
import CompanyLogo from 'companyLogo';

let Expenses = props => {
  console.log("got here");
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff' }}>Expenses Index here</div>
    </div>
  );
};
export default Expenses;