/*
 *
 * MyPokemonApp actions
 *
 */

import { DEFAULT_ACTION,GET_POKEMON_LIST,ON_CLICK_REQUEST, DISPLAY_FORM, ADD_NEW_POKEMONS } from './constants'; //, DISPLAY_FORM, ADD_NEW_POKEMONS


export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getPokemonList() {
  return {
    type: GET_POKEMON_LIST,
  };
}

export function addNewPokemons(data){
  return{
    type: ADD_NEW_POKEMONS,
    data
  }
}

export function onClickRequest(index) {
  return {
    type: ON_CLICK_REQUEST,
    index
  };
}

export function onClickForm(){
  return{
    type: DISPLAY_FORM,
  }
}



