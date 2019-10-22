/**
 * Loginpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';
const selectLogin = state => state.get('login', initialState);

const getUsername = () =>
  createSelector(selectLogin, loginState => loginState.get('username'));

const getPassword = () =>
  createSelector(selectLogin, loginState => loginState.get('password'));

const getErrorMessage = () =>
  createSelector(selectLogin, loginState => loginState.get('login_failed_message'));

const isFetchingState = state => state.get('loader');

const getIsFetching = () =>
      createSelector(isFetchingState, fetchingState => fetchingState.get('isFetching'));
export { selectLogin, getUsername, getPassword, getIsFetching, getErrorMessage };