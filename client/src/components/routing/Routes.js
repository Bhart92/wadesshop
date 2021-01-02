import React, {Fragment} from 'react';
import NotFound from '../landing/NotFound';
import { Route, Switch } from 'react-router-dom';

const Routes = ({isAuthenticated}) => {
  return (
    <Fragment>
        <Switch>
          <Route component={NotFound} />
        </Switch>
    </Fragment>

  );
};


export default Routes;