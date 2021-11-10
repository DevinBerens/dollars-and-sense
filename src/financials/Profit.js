import React from 'react';
import CompanyLogo from 'companyLogo';

let dailyIncome = 0.00;
let weeklyIncome = 0.00;
let monthlyIncome = weeklyIncome * 4;
let quarterlyIncome = monthlyIncome * 3;
let yearlyIncome = quarterlyIncome * 4;
let dailyExpenses = 0.00;
let weeklyExpenses = 0.00;
let monthlyExpenses = weeklyExpenses * 4;
let quarterlyExpenses = monthlyExpenses * 3;
let yearlyExpenses = quarterlyExpenses * 4;
let dailyProfit = dailyIncome - dailyExpenses;
let weeklyProfit = weeklyIncome - weeklyExpenses;
let monthlyProfit = monthlyIncome - monthlyExpenses;
let quarterlyProfit = quarterlyIncome - quarterlyExpenses;
let yearlyProfit = yearlyIncome - yearlyExpenses;

function profit(){

  document.write("Weekly profits are $" + weeklyProfit);

};