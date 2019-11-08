import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the reduxPokemonApp state domain
 */

const selectReduxPokemonAppDomain = state =>
  state.get('reduxPokemonApp', initialState);

export const getPokemons = () =>
createSelector(selectReduxPokemonAppDomain, substate => substate.get('pokemons')); 
