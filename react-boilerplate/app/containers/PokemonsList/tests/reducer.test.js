import { fromJS } from 'immutable';
import pokemonsListReducer from '../reducer';

describe('pokemonsListReducer', () => {
  it('returns the initial state', () => {
    expect(pokemonsListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
