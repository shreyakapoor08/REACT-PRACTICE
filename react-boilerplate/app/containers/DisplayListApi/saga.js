import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import {
  GET_DISPLAY_LIST,
  GET_DISPLAY_LIST_SUCCESS,
  GET_DISPLAY_LIST_FAILURE
} from './constants'

function getHeaders() {
  return {
  headers: {
  "X-Authorization": `Bearer ${localStorage.token}`, // Need to get from store once Group done
  "Content-Type": "application/json",
  "X-TENANT-ID": localStorage.tenant
  }
  };
  }



export function* apiGetDisplayListHandler(action) {
  try {
  let url = "http://www.mocky.io/v2/5d9ac1a332000072002ae366"
  const response = yield call(axios.get, url, getHeaders()); 
  console.log("response",response);
  yield put({type: GET_DISPLAY_LIST_SUCCESS,response:response.data}); 
  }
  catch (error) {
   if (error.response) {
     if (error.response.status === 401) {
     logoutHandler();
     } else if (error.response.status === 400){
     yield put({ 
     type: GET_DISPLAY_LIST_FAILURE, 
     error: error.response.data.message ? error.response.data.message : error.response.data.error })
     } else if (error.response.status === 403) {
     yield put(push("/error403"));
     } else if (error.response.status === 404) {
     yield put(push("/error404"));
     } else {
     yield put({ type: GET_DISPLAY_LIST_FAILURE, error: error.response.data.message });
     }
     } else {
     yield put({ type: GET_DISPLAY_LIST_FAILURE, error: error.message ? error.message : error });
     } 
  }
  }

export function* watcherGetDisplayList(){
  yield takeLatest(GET_DISPLAY_LIST,apiGetDisplayListHandler);
}

export default function* rootSaga(){
  yield[watcherGetDisplayList()];
}