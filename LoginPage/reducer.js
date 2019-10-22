/*
 * LoginReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import { CHANGE_USERNAME, CHANGE_PASSWORD, LOGGED_SUCCESSFULLY, LOGIN_FAILED } from './constants';
// The initial state of the App
export const initialState = fromJS({
  username: '',
  password: '',
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      return state.set('username', action.name);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case LOGIN_FAILED:
      return state.set('login_failed_message', action.response);
    case LOGGED_SUCCESSFULLY:
      localStorage['token'] = action.response.accessToken;
      return state.set('accessToken', action.response.accessToken);
    default:
      return state;
  }
}

export default loginReducer;
