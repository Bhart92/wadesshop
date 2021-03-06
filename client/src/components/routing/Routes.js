import React, {Fragment} from 'react';
import About from '../about/About';
import NotFound from '../landing/NotFound';
import LandingPage from '../landing/LandingPage';
import StoreIndex from '../store/StoreIndex';
import { connect } from 'react-redux';


import { Route, Switch } from 'react-router-dom';

const Routes = ({isAuthenticated}) => {
  return (
    <Fragment>
        <Switch>
          <Route exact path='/'component={LandingPage} />
          <Route exact path='/ourlabel'component={About} />
          <Route exact path='/store'component={StoreIndex} />
          <Route component={NotFound} />
        </Switch>
    </Fragment>

  );
};

const mapStateToProps = state => ({
  products: state.products
});
export default connect(mapStateToProps)(Routes);