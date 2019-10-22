/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { createStructuredSelector } from 'reselect';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Loader from '../../components/Loader/Loadable';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { changeUsername, changePassword, loginInitiated } from './actions';
import {
  getUsername,
  getPassword,
  getIsFetching,
  getErrorMessage,
} from './selectors';
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  loginHandler = event => {
    event.preventDefault();
    this.props.onloginRequest(this.props.username, this.props.password);
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="loginBg">
            <div className="loginBox">
              {this.props.isFetching ? <Loader /> : ''}
              <div className="loginHeader">
                <a className="optimLogoText">Iot83</a>
              </div>
              <form
                className="contentForm p-0"
                onSubmit={e => {
                  this.loginHandler(e);
                }}
              >
                <div className="loginForm">
                  {this.props.errorMessage ? (
                    <div className="errorMessage">
                      {this.props.errorMessage}
                    </div>
                  ) : (
                    ''
                  )}
                  <div className="form-group">
                    <label>Email :</label>
                    <input
                      type="email"
                      name=""
                      value={this.props.username}
                      className="form-control"
                      onChange={this.props.onChangeUsername}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Password :</label>
                    <input
                      type="password"
                      name=""
                      value={this.props.password}
                      className="form-control"
                      onChange={this.props.onChangePassword}
                      required
                    />
                  </div>
                </div>
                <div className="loginForm border-0">
                  <div className="form-group mr-0">
                    <button
                      type="submit"
                      name="button"
                      className="btn btn-dark"
                    >
                      Login
                    </button>
                    <Link to="/resetPassword">
                      Reset Password
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onloginRequest: (username, password) =>
      dispatch(loginInitiated(username, password)),
  };
}

const mapStateToProps = createStructuredSelector({
  username: getUsername(),
  password: getPassword(),
  isFetching: getIsFetching(),
  errorMessage: getErrorMessage(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withConnect,
  withSaga,
)(LoginPage);
