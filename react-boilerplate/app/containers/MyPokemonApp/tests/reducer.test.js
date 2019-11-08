import { fromJS } from 'immutable';
import myPokemonAppReducer from '../reducer';

describe('myPokemonAppReducer', () => {
  it('returns the initial state', () => {
    expect(myPokemonAppReducer(undefined, {})).toEqual(fromJS({}));
  });
});
