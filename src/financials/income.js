import React, { useState } from 'react';
import CompanyLogo from 'companyLogo';

let weeklyIncome = 10000;
let monthlyIncome = weeklyIncome * 4;
let quarterlyIncome = monthlyIncome * 3;
let yearlyIncome = quarterlyIncome * 4;

let Income = props => {
  let [dailyIncome, setDailyIncome] = useState(0);

  let divStyle = {
    marginTop: '10px'
  };

  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff' }}>
        <div style={divStyle}>
          Daily income recorded so far is ${dailyIncome}
        </div>
        <div style={divStyle}>Please enter daily income:</div>
        <form
          onSubmit={e => {
            e.preventDefault();
            setDailyIncome(parseInt(dailyIncome) + parseInt(e.target[0].value));
          }}
        >
          <input
            style={divStyle}
            type="text"
            name="email"
            placeholder="Daily Income"
          />
          <button type="submit" style={divStyle}>
            Enter Income
          </button>
        </form>
        <div style={divStyle}>
          Weekly income recorded so far is ${weeklyIncome + dailyIncome}
        </div>
        <div style={divStyle}>Projected monthly income is ${monthlyIncome}</div>
        <div style={divStyle}>
          Projected quarterly income is ${quarterlyIncome}
        </div>
        <div style={divStyle}>Projected yearly income is ${yearlyIncome}</div>
      </div>
    </div>
  );
};
export default Income;
