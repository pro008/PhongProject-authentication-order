import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/main.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProtectedRoute from './layout/ProtectedRoute';
import MainLayout from './layout/MainLayout';

import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import OrderDetail from './OrderDetail';
import AdminManage from './AdminManage';
import AdminDetail from './AdminDetail';

class App extends Component {
  constructor(props) {
    super(props);
  }

  Navigator() {
    return (
      <Switch>
        <Route exact path={'/login'} render={(props) => <LoginPage {...props} />} />

        <Route>
          <MainLayout>
            <Switch>
              <ProtectedRoute exact path={'/'} component={Dashboard} />

              <ProtectedRoute path={'/order/:order_id'} component={OrderDetail} />

              <ProtectedRoute exact path={'/order'} component={OrderDetail} />

              <ProtectedRoute exact path={'/users'} component={AdminManage} />

              <ProtectedRoute exact path={'/user'} component={AdminDetail} />

              <ProtectedRoute path={'/user/:user_id'} component={AdminDetail} />
            </Switch>
          </MainLayout>
        </Route>
      </Switch>
    );
  }

  render() {
    return (
      <div>
        <Router>{this.Navigator()}</Router>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    user: state.UserReducer.user,
    loginStatus: state.UserReducer.loginStatus
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
