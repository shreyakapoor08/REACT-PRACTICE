import { fromJS } from 'immutable';
import displayListApiReducer from '../reducer';

describe('displayListApiReducer', () => {
  it('returns the initial state', () => {
    expect(displayListApiReducer(undefined, {})).toEqual(fromJS({}));
  });
});
