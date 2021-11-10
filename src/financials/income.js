import React, { useState } from 'react';
import CompanyLogo from 'companyLogo';

let weeklyIncome = 10000;
let monthlyIncome = weeklyIncome * 4;
let quarterlyIncome = monthlyIncome * 3;
let yearlyIncome = quarterlyIncome * 4;

let Income = (props) => {
  let [dailyIncome, setDailyIncome] = useState(0);

  return (
    <div className="indexWrapper">
      <CompanyLogo />
      <div style={{ color: '#ffffff' }}>
        <div>
          Daily income recorded so far is ${dailyIncome + dailyIncome}
        </div>
        <div>
            Please enter daily income:
        </div>
        <input type="text" name="email" placeholder="Daily Income" />
        <div onClick={(val) => setDailyIncome(dailyIncome + val)}>Enter Income</div>
        <div>
            Weekly income recorded so far is ${weeklyIncome + dailyIncome}
        </div>
        <div>
            Projected monthly income is ${monthlyIncome}
        </div>
        <div>
            Projected quarterly income is ${quarterlyIncome}
        </div>
        <div>
            Projected yearly income is ${yearlyIncome}
        </div>
      </div>
    </div>
  );

}
export default Income;