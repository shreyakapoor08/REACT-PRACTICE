import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the displayListApi state domain
 */

const selectDisplayListApiDomain = state =>
  state.get('displayListApi', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by DisplayListApi
 */


export const getDisplayListSuccess = () =>
createSelector(selectDisplayListApiDomain, substate => substate.get('getDisplayListSuccess')); 

export const getDisplayListFailure = () =>
createSelector(selectDisplayListApiDomain, substate => substate.get('getDisplayListFailure'));

