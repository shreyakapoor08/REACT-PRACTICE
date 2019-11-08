/*
 *
 * ReduxPractice reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION , ON_CLICK_REQUEST, GET_POKEMON_LIST} from './constants';

export const initialState = fromJS({
  pokemons : [
    { Name: "Bulbasaur", Type: "Grass", Stage: 0, Species: "Seed Pokemon" , Caught : false },
    { Name: "Ivysaur", Type: "Grass", Stage: 3, Species: "Seed Pokemon" , Caught : false },
    { Name: "Venusaur", Type: "Grass", Stage: 5, Species: "Seed Pokemon" , Caught : false },
    { Name: "Charmander", Type: "Fire", Stage: 0, Species: "Lizard Pokemon" , Caught : false },
    { Name: "Charmeleon", Type: "Fire", Stage: 3, Species: "Flame Pokemon" , Caught : false },
    { Name: "Charizard", Type: "Fire", Stage: 5, Species: "Flame Pokemon" , Caught : false },
    { Name: "Squirtle", Type: "Water", Stage: 0, Species: "Tiny Turtle Pokemon" , Caught : false },
    { Name: "Wartortle", Type: "Water", Stage: 3, Species: "Turtle Pokemon" , Caught : false },
    { Name: "Blastoise", Type: "Water", Stage: 5, Species: "Shellfish Pokemon" , Caught : false },
    { Name: "Caterpie", Type: "Bug", Stage: 1, Species: "Worm Pokemon" , Caught : false },
    { Name: "Metapod", Type: "Bug", Stage: 2, Species: "Cocoon Pokemon" , Caught : false },
    { Name: "Butterfree", Type: "Bug", Stage: 4, Species: "Butterfly Pokemon" , Caught : false },
    { Name: "Weedle", Type: "Bug", Stage: 1, Species: "Hairy Bug Pokemon" , Caught : false },
    { Name: "Kakuna", Type: "Bug", Stage: 2, Species: "Cocoon Pokemon" , Caught : false }, 
    { Name: "Beedrill", Type: "Bug", Stage: 4, Species: "Poison Bee Pokemon" , Caught : false },
    { Name: "Pidgeotto", Type: "Flying", Stage: 1, Species: "Bird Pokemon" , Caught : false },
    { Name: "Pidgeot", Type: "Flying", Stage: 3, Species: "Bird Pokemon" , Caught : false },
    { Name: "Pidgey", Type: "Flying", Stage: 5, Species: "Bird Pokemon" , Caught : false },
    { Name: "Rattata", Type: "Normal", Stage: 1, Species: "Mouse Pokemon" , Caught : false },  
    { Name: "Machop", Type: "Fighting", Stage: 1, Species: "Superpower Pokemon" , Caught : false },                                                                                            
    { Name: "Machoke", Type: "Fighting", Stage: 2, Species: "Superpower Pokemon" , Caught : false },                                                                                            
    { Name: "Machamp", Type: "Fighting", Stage: 5, Species: "Superpower Pokemon" , Caught : false },                                                                                            
    { Name: "Bellsprout", Type: "Grass", Stage: 1, Species: "Flower Pokemon" , Caught : false },                                                                                            
    { Name: "Weepinbell", Type: "Grass", Stage: 3, Species: "Flycatcher Pokemon" , Caught : false },                                                                                            
    { Name: "Victreebel", Type: "Grass", Stage: 5, Species: "Flycatcher Pokemon" , Caught : false },                                                                                            
    { Name: "Graveler", Type: "Rock", Stage: 3, Species: "Rock Pokemon" , Caught : false }, 
    { Name: "Tangela	", Type: "Grass", Stage: 4, Species: "Vine Pokemon" , Caught : false },                                                                                          
    { Name: "Jynx", Type: "psychic", Stage: 6, Species: "Human Shape Pokemon" , Caught : false },                                                                                          
    { Name: "Dratini	", Type: "Dratini", Stage: 3, Species: "Dratini Pokemon" , Caught : false },                                                                                          
    { Name: "Dragonair	", Type: "Dragon", Stage: 5, Species: "Dragon Pokemon" , Caught : false },                                                                                          
  ],
  count: 0,
});

function reduxPokemonAppReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case GET_POKEMON_LIST:
        return state;
    case ON_CLICK_REQUEST: 
      return state;
    default:
     return state;
      }
}



export default reduxPokemonAppReducer;
