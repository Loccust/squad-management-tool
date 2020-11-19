
import { UPDATE_DROP } from '../actions/action-types';

interface IPositions{
  text: string;
}

const initialState = {
  payload: [
    {
      text: '',
      dropped: false
    },
    {
      text: '',
      dropped: false
    }
  ]
};

export const DropReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_DROP:
      console.log('ACTION'+action.payload.text);
      var newArray = [...state.payload]; 
      newArray[action.payload.index].dropped = action.payload.dropped;
      newArray[action.payload.index].text = action.payload.text;      
      return { 
       ...state,
       todos: newArray,
      }
    default:
      return state;
  }
};