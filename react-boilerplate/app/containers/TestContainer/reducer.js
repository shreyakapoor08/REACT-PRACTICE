/*
 *
 * TestContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILURE,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from './constants';
//ab yaha pr cases banayenge vo success aur failure ke liye hote hai, api response ke

export const initialState = fromJS({}); //yeh redux ki global state hoti h, obj mai key value pair ki form mai set krte h


function testContainerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAILS_SUCCESS:
      return state.set("getDetailsSuccess", action.response); //to set the value whether it is success or failure
    case GET_DETAILS_FAILURE:
      return state.set("getDetailsFailure", action.error);
      case GET_DATA_SUCCESS:
        return state.set("getDataSuccess", action.response); //to set the value whether it is success or failure
      case GET_DATA_FAILURE:
        return state.set("getDataFailure", action.error);
    case DEFAULT_ACTION:
      return state;
    default:
      return initialState; //yaha jo const set kiya hai initialState wahi return hoga
  }
}

export default testContainerReducer;
