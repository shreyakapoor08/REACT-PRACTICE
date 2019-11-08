import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the pokemonsList state domain
 */

const selectPokemonsListDomain = state =>
  state.get('pokemonsList', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PokemonsList
 */

const makeSelectPokemonsList = () =>
  createSelector(selectPokemonsListDomain, substate => substate.get('pokemons'));

  // const makeSelectButtonClick = () =>
  // createSelector(selectPokemonsListDomain, substate => substate.get('count'));

export default makeSelectPokemonsList;
export { selectPokemonsListDomain };
