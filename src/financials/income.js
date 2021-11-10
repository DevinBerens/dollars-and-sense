import React from 'react';
import CompanyLogo from 'companyLogo';

let Income = props => {
  console.log("got here");
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff' }}>Income Index here</div>
    </div>
  );
};
export default Income;