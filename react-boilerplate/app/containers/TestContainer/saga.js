import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import axios from 'axios'; //to call api we import axios it binds the req and response from api
import {GET_DETAILS,
  GET_DETAILS_SUCCESS,
  GET_DETAILS_FAILURE,
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE
} from './constants';


// Individual exports for testing

 //jiss function mai * laga ho usse generator function kehte hai

//saga mai main call hota hai api call krne ka, ismai hum sabse pehle niche se start krte h
//ismai 4 kaam karne hai
// 1.import the constants 2. make function rootSaga in the end ismai yield karke array banta hai watchers ka 
// 3. fir hum watcher banate hai(jo detail api se utha rahe hai aur getDetail wale function ko bind karta h)
//yield async flow ko pause ya play karega
//saga ke baad reducer mai jayenge(ismai data set hota hai), fir reducer se selector hai jayenge(ismai data get karega)

function getHeaders() {
  return {
  headers: {
  "X-Authorization": `Bearer ${localStorage.token}`, // Need to get from store once Group done
  "Content-Type": "application/json",
  "X-TENANT-ID": localStorage.tenant
  }
  };
  }

export function* apiGetDetailsHandler(action) {
  try {
  let url = "http://www.mocky.io/v2/5d8c97692e00005100abdb14"
  const response = yield call(axios.get, url, getHeaders()); //call se api call hoti h, axios.get data uthata hai aur bind krta h
  console.log("response",response);
  
  yield put({type: GET_DETAILS_SUCCESS,response:response.data}); //put se hum data dalte hai toh response ke data ko GET_DETAILS_SUCCESS type de denge
  }
  catch (error) {
   if (error.response) {
     if (error.response.status === 401) {
     logoutHandler();
     } else if (error.response.status === 400){
     yield put({ 
     type: GET_DETAILS_FAILURE, 
     error: error.response.data.message ? error.response.data.message : error.response.data.error })
     } else if (error.response.status === 403) {
     yield put(push("/error403"));
     } else if (error.response.status === 404) {
     yield put(push("/error404"));
     } else {
     yield put({ type: GET_DETAILS_FAILURE, error: error.response.data.message });
     }
     } else {
     yield put({ type: GET_DETAILS_FAILURE, error: error.message ? error.message : error });
     } 
  }
  }

  export function* apiGetDataHandler(action) {
    try {
    let url = "http://www.mocky.io/v2/5d8c97692e00005100abdb14"
    const response = yield call(axios.get, url, getHeaders()); //call se api call hoti h, axios.get data uthata hai aur bind krta h
    console.log("response",response);
    
    yield put({type: GET_DATA_SUCCESS,response:response.data}); //put se hum data dalte hai toh response ke data ko GET_DATA_SUCCESS type de denge
    }
    catch (error) {
     if (error.response) {
       if (error.response.status === 401) {
       logoutHandler();
       } else if (error.response.status === 400){
       yield put({ 
       type: GET_DATA_FAILURE, 
       error: error.response.data.message ? error.response.data.message : error.response.data.error })
       } else if (error.response.status === 403) {
       yield put(push("/error403"));
       } else if (error.response.status === 404) {
       yield put(push("/error404"));
       } else {
       yield put({ type: GET_DATA_FAILURE, error: error.response.data.message });
       }
       } else {
       yield put({ type: GET_DATA_FAILURE, error: error.message ? error.message : error });
       } 
    }
    }
  


export function* watcherGetDetails(){
  yield takeLatest(GET_DETAILS,apiGetDetailsHandler);
}

export function* watcherGetData(){
  yield takeLatest(GET_DATA, apiGetDataHandler);
}

export default function* rootSaga() {
  yield[watcherGetDetails(), watcherGetData()];
}
