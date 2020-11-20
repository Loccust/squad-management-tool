
import { UPDATE_PLAYER, UPDATE_POSITION } from '../actions/action-types';

const initialState = {
  positions: [
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
    {
      text: "",
      lastDropped: false
    },
  ]
};

export const DropReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_PLAYER:
      var newArray = [...state.positions]; 
      newArray[action.newValue.index].text = action.newValue.text;
      newArray[action.newValue.index].lastDropped = false;
      return { 
       ...state,
       positions: newArray,
      }

    case UPDATE_POSITION:
      var newArray = [...state.positions]; 
      newArray[action.newValue.index].lastDropped = action.newValue.lastDropped;
      return { 
       ...state,
       positions: newArray,
      }

    default:
      return state;
  }
};