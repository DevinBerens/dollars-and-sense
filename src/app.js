import React from 'react';
import loadable from '@loadable/component';
import { Route } from 'react-router-dom';

let Login = loadable(() => import('login/index'));
let Portal = loadable(() => import('portal/index'));
let Orders = loadable(() => import('orders/index'));
let Financials = loadable(() => import('financials/index'));
let Inventory = loadable(() => import('inventory/index'));

let App = props => {
  return (
    <div style={{ margin: '0' }}>
      <Route
        path={['/', '/login/']}
        exact={true}
        render={rProps => <Login {...rProps} {...props} />}
      />
      <Route
        path={'/portal/'}
        exact={true}
        render={rProps => <Portal {...rProps} {...props} />}
      />
      <Route
        path={'/orders/'}
        exact={true}
        render={rProps => <Orders {...rProps} {...props} />}
      />
      <Route
        path={'/financials/'}
        exact={true}
        render={rProps => <Financials {...rProps} {...props} />}
      />
      <Route
        path={'/inventory/'}
        exact={true}
        render={rProps => <Inventory {...rProps} {...props} />}
      />
    </div>
  );
};

export default App;
