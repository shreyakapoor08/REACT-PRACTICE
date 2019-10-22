import { takeEvery } from 'redux-saga';
import { call, put, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'react-router-redux';
import { LOGIN_INITIATED, LOGGED_SUCCESSFULLY, LOGIN_FAILED } from './constants';
import config from 'config';
import jwt_decode from 'jwt-decode';

export function* apiLoginHandlerAsync(action) {
  try {
    let baseApiUrl = config.apiRoot
    let Tenant_name = config.tenantName
    const url = baseApiUrl + Tenant_name + '/api/v2/login';
    yield put({ type: 'show_loader'});
    const response = yield call(axios.post, url, action.data);
    yield put({ type: LOGGED_SUCCESSFULLY, response: response.data.data });
    yield put({ type: LOGIN_FAILED, response: '' });
    const token = localStorage.token;
    const jwt_token=jwt_decode(token).view;
    console.log('jwt_decode(token): ', jwt_decode(token));
    let name = jwt_decode(token).name ? jwt_decode(token).name : "Admin";
    localStorage['Username'] = name;
    localStorage['isAdmin'] = jwt_decode(token).iamAccess;
    if(jwt_token!='userView'){
        yield put(push('/technicianDashboard'));
    }else{
      yield put(push('/userDashboard'));
    }
  } catch (error) {
    if(error.response) {
      if(error.response.data.code == 401) {
        yield put({ type: LOGIN_FAILED, response: error.response.data.message });
      }
      else {
        yield all(error.response.data.data.map(x => put({ type: LOGIN_FAILED, response: x.message })));
      }
    }
  } finally {
    yield put({ type: 'hide_loader'});
  }
  
}

export function* watcherLoginRequests() {
  yield takeEvery(LOGIN_INITIATED, apiLoginHandlerAsync);
}

export default function* rootSaga() {
  yield [watcherLoginRequests()];
}
