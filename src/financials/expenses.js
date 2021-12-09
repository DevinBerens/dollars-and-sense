import React, { useState } from 'react';
import CompanyLogo from 'companyLogo';

global.weeklyExpenses = 6556;
global.monthlyExpenses = global.weeklyExpenses * 4;
global.quarterlyExpenses = global.monthlyExpenses * 3;
global.yearlyExpenses  = global.quarterlyExpenses * 4;

let Expenses = props => {
  let [dailyExpenses, setDailyExpenses] = useState(0.00);

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
          Daily expenses recorded so far are ${dailyExpenses}
        </div>
        <div style={{marginBottom: '0px'}}>Please enter daily expenses:</div>
        <form
          onSubmit={e => {
            e.preventDefault();
            setDailyExpenses(parseInt(dailyExpenses) + parseInt(e.target[0].value));
          }}
        >
          <input
            style={divStyle}
            type="text"
            name="email"
            placeholder="Daily Expenses"
          />
          <button type="submit" style={{marginTop: '0px', marginLeft: "4px"}}>
            Enter Expenses
          </button>
        </form>
        <div style={divStyle}>
          Weekly expenses recorded so far are ${global.weeklyExpenses + dailyExpenses}
        </div>
        <div style={divStyle}>Projected monthly expenses are ${global.monthlyExpenses + (dailyExpenses * 30)}</div>
        <div style={divStyle}>
          Projected quarterly expenses are ${global.quarterlyExpenses + (dailyExpenses * 120)}
        </div>
        <div style={divStyle}>Projected yearly expenses are ${global.yearlyExpenses + (dailyExpenses * 365)}</div>
      </div>
    </div>
  );
};

export default Expenses;