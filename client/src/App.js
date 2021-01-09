import React, { useEffect, Fragment} from 'react';
// import LandingPage from './components/landing/LandingPage';
import Routes from './components/routing/Routes';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

// Redux
import store from './store';
// import setAuthToken from './utils/setAuthToken';
import './styles/styles.scss';
import { Provider } from 'react-redux';
// import { loadUser } from './actions/auth';

// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

const App = () => {

  return (

    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
     </Provider>
  );
};

export default App;