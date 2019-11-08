/*
 *
 * PokemonsList actions
 *
 */

import { DEFAULT_ACTION , ON_CLICK_REQUEST, GET_POKEMON_LIST} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function onClickRequest(index) {
  return {
    type: ON_CLICK_REQUEST,
    index
  };
}

export function getPokemonList() {
  return {
    type: GET_POKEMON_LIST,
  };
}
