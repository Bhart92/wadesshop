import React, {Fragment} from 'react';
import About from '../about/About';
import NotFound from '../landing/NotFound';
import { Route, Switch } from 'react-router-dom';

const Routes = ({isAuthenticated}) => {
  return (
    <Fragment>
        <Switch>
          <Route exact path='/ourlabel'component={About} />
          <Route component={NotFound} />
        </Switch>
    </Fragment>

  );
};


export default Routes;