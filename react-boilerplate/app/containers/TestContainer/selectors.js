import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testContainer state domain
 */

const selectTestContainerDomain = state => state.get('testContainer', initialState); //initial state se value access krrhe h state mai

/**
 * Other specific selectors
 */

/**
 * Default selector used by TestContainer
 */
  export const getSuccess = () =>
  createSelector(selectTestContainerDomain, substate => substate.get('getDetailsSuccess')); //get kiya key(getDetailsSuccesss) ka data aur
  //getSuccess mai daal diya
  export const getFailure = () =>
  createSelector(selectTestContainerDomain, substate => substate.get('getDetailsFailure'));


  export const getDataSuccess = () =>
  createSelector(selectTestContainerDomain, substate => substate.get('getDataSuccess'));
  export const getDataFailure = () =>
  createSelector(selectTestContainerDomain, substate => substate.get('getDataFailure'));


