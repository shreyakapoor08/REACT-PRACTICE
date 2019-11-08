/*
 *
 * DisplayListApi reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION,GET_DISPLAY_LIST_FAILURE,GET_DISPLAY_LIST_SUCCESS } from './constants';

export const initialState = fromJS({});

function displayListApiReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DISPLAY_LIST_SUCCESS:
      return state.set("getDisplayListSuccess", action.response); 
    case GET_DISPLAY_LIST_FAILURE:
      return state.set("getDisplayListFailure", action.error);
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default displayListApiReducer;
