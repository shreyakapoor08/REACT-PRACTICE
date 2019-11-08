/*
 *
 * DisplayListApi actions
 *
 */

import { DEFAULT_ACTION, GET_DISPLAY_LIST } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDisplayList() {
  
  return {
    type: GET_DISPLAY_LIST //url is stored here in this const, api uthane ka kaam yeh karega
  };
}

