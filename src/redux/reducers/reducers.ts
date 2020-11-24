
import { combineReducers } from 'redux';
import { DropReducer } from './drop-reducer';

export const Reducers = combineReducers({
    dropState: DropReducer,
});