import React from 'react';
import loadable from '@loadable/component';
import { Route } from 'react-router-dom';

let Login = loadable(() => import('login/index'));
let Portal = loadable(() => import('portal/index'));

let App = (props) => {
  return (
    <div style={{ margin: '0' }}>
      <Route
        path={['/', '/login']}
        exact={true}
        render={(rProps) => <Login {...rProps} {...props} />}
      />
      <Route
        path={'/portal'}
        exact={true}
        render={(rProps) => <Portal {...rProps} {...props} />}
      />
    </div>
  );
};

export default App;
