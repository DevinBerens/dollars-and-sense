import React, { useState } from 'react';
import CompanyLogo from 'companyLogo';

//let dalyProfit = income.dailyIncome - expenses.dailyExpenses;

let Profit = props => {

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
          Weekly profit to date is ${global.weeklyIncome - global.weeklyExpenses}
        </div>
        <div style={divStyle}>
          Projected monthly profit is ${global.monthlyIncome - global.monthlyExpenses}
        </div>
        <div style={divStyle}>
          Projected quarterly profit is ${global.quarterlyIncome - global.quarterlyExpenses}
        </div>
        <div style={divStyle}>
          Projected yearly profit is ${global.yearlyIncome - global.yearlyExpenses}
        </div>
      </div>
    </div>
  )
};

export default Profit;