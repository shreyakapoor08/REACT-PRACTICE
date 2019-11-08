import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonApp state domain
 */

const selectPokemonAppDomain = state => state.get('pokemonApp', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokemonApp
 */

const makeSelectPokemonApp = () =>
  createSelector(selectPokemonAppDomain, substate => substate.toJS());

export default makeSelectPokemonApp;
export { selectPokemonAppDomain };
