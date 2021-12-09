import React, { useState } from 'react';
import CompanyLogo from 'companyLogo';

global.weeklyIncome = 11226;
global.monthlyIncome = global.weeklyIncome * 4;
global.quarterlyIncome = global.monthlyIncome * 3;
global.yearlyIncome = global.quarterlyIncome * 4;

let Income = props => {
  let [dailyIncome, setDailyIncome] = useState(0.00);

  let divStyle = {
    marginTop: '10px',
    marginBottom: '20px',
    borderStyle: "solid",
    borderColor: "black",
    backgroundColor: "gray",
    paddingTop: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingBottom: "5px"
  };

  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff'}}>
        <div style={divStyle}>
          Daily income recorded so far is ${dailyIncome}
        </div>
        <div style={{marginBottom: '0px'}}>Please enter daily income:</div>
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
          <button type="submit" style={{marginTop: '0px', marginLeft: "4px"}}>
            Enter Income
          </button>
        </form>
        <div style={divStyle}>
          Weekly income recorded so far is ${global.weeklyIncome + dailyIncome}
        </div>
        <div style={divStyle}>Projected monthly income is ${global.monthlyIncome + (dailyIncome * 30)}</div>
        <div style={divStyle}>
          Projected quarterly income is ${global.quarterlyIncome + (dailyIncome * 120)}
        </div>
        <div style={divStyle}>Projected yearly income is ${global.yearlyIncome + (dailyIncome * 365)}</div>
      </div>
    </div>
  );
};
export default Income;