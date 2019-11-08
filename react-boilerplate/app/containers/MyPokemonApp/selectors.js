import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the myPokemonApp state domain
 */

const selectMyPokemonAppDomain = state =>
  state.get('myPokemonApp', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by MyPokemonApp
 */

export const makeSelectMyPokemonApp = () =>
  createSelector(selectMyPokemonAppDomain, substate => substate.pokemons);

export const makeSelectOnClickRequest = () => 
  createSelector(selectMyPokemonAppDomain,  substate => substate.count);
//   createSelector(selectMyPokemonAppDomain,  substate => substate.get('count'));

export const displayForm = () =>
  createSelector(selectMyPokemonAppDomain, substate => substate.displayForm); 
// createSelector(selectMyPokemonAppDomain, substate => substate.get('displayForm')); 

export const addNewValues = () =>
  createSelector(selectMyPokemonAppDomain, substate => substate.addNewPokemon); 
// createSelector(selectMyPokemonAppDomain, substate => substate.get('addNewPokemons')); 


