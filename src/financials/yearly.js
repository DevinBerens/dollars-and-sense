import React from 'react';
import CompanyLogo from 'companyLogo';

let Yearly = props => {
  console.log("got here");
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff' }}>Yearly Index here</div>
    </div>
  );
};
export default Yearly;