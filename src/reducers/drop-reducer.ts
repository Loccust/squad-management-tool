
import { UPDATE_DROP } from '../actions/action-types';

const initialState = {
  newValue: false
};

export const DropReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DROP:
      return {
        ...state,
        newValue: action.newValue
      };
    default:
      return state;
  }
};