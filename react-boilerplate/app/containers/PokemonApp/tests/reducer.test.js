import { fromJS } from 'immutable';
import pokemonAppReducer from '../reducer';

describe('pokemonAppReducer', () => {
  it('returns the initial state', () => {
    expect(pokemonAppReducer(undefined, {})).toEqual(fromJS({}));
  });
});
