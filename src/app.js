import React from 'react';
import loadable from '@loadable/component';
import { Route } from 'react-router-dom';

let Account = loadable(() => import('account/index'));
let Financials = loadable(() => import('financials/index'));
let Inventory = loadable(() => import('inventory/index'));
let Login = loadable(() => import('login/index'));
let Menu = loadable(() => import('menu/index'));
let Orders = loadable(() => import('orders/index'));
let Portal = loadable(() => import('portal/index'));
let Staff = loadable(() => import('staff/index'));
let Profit = loadable(() => import('financials/profit'));
let Expenses = loadable(() => import('financials/expenses'));

let App = props => {
  return (
    <div style={{ margin: '0' }}>
      <Route
        path={'/account/'}
        exact={true}
        render={rProps => <Account {...rProps} {...props} />}
      />
      <Route
        path={'/financials/'}
        exact={true}
        render={rProps => <Financials {...rProps} {...props} />}
      />

      <Route
        path ={'/financials/profit'}
        exact={true}
        render={rProps => <Profit {...rProps} {...props} />}
      />

      <Route
        path ={'/financials/expenses'}
        exact={true}
        render={rProps => <Expenses {...rProps} {...props} />}
      />
      <Route
        path={'/inventory/'}
        exact={true}
        render={rProps => <Inventory {...rProps} {...props} />}
      />
      <Route
        path={['/', '/login/']}
        exact={true}
        render={rProps => <Login {...rProps} {...props} />}
      />
      <Route
        path={'/menu/'}
        exact={true}
        render={rProps => <Menu {...rProps} {...props} />}
      />
      <Route
        path={'/orders/'}
        exact={true}
        render={rProps => <Orders {...rProps} {...props} />}
      />
      <Route
        path={'/portal/'}
        exact={true}
        render={rProps => <Portal {...rProps} {...props} />}
      />
      <Route
        path={'/staff/'}
        exact={true}
        render={rProps => <Staff {...rProps} {...props} />}
      />
    </div>
  );
};

export default App;
