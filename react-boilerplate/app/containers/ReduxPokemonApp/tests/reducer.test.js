import { fromJS } from 'immutable';
import reduxPokemonAppReducer from '../reducer';

describe('reduxPokemonAppReducer', () => {
  it('returns the initial state', () => {
    expect(reduxPokemonAppReducer(undefined, {})).toEqual(fromJS({}));
  });
});
