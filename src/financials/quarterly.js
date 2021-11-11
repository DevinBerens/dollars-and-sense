import React from 'react';
import CompanyLogo from 'companyLogo';

let Quarterly = props => {
  console.log("got here");
  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff' }}>Quarterly Index here</div>
    </div>
  );
};
export default Quarterly;