import React from 'react';
import CompanyLogo from 'companyLogo';

let Profit = props => {
  console.log("got here");
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff' }}>Profit Index here</div>
    </div>
  );
};
export default Profit;