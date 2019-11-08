/*
 *
 * TestContainer actions
 *
 */

import { DEFAULT_ACTION,GET_DETAILS, GET_DATA } from './constants'; //now we will define the function GET_DETAILS in saga.js

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDetails() {
  console.log("hi action");
  return {
    type: GET_DETAILS //url is stored here in this const, api uthane ka kaam yeh karega
  };
}

export function getData(){
  return{
    type: GET_DATA
  };
}