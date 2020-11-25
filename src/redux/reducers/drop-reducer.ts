
import { UPDATE_PLAYER, UPDATE_POSITION, UPDATE_LISTPLAYERS } from '../actions/action-types';

const initialState = {
  positions: [
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    },
    {
      playerId: 0,
      text: "",
      lastDropped: false
    }
  ],
  players: [
    {
      id: 1,
      name: 'Neymar Junior',
      age: 25,
      nacionality: 'Brasil' 
    },
    {
        id: 2,
        name: 'Cristiano Ronaldo',
        age: 32,
        nacionality: 'Portugal'    
    }
  ]
};

export const DropReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_PLAYER:
      var positions = [...state.positions]; 
      var playerList = [...state.players]; 
      positions[action.newValue.index].playerId = action.newValue.playerId;
      positions[action.newValue.index].text = action.newValue.text;
      positions[action.newValue.index].lastDropped = false;
      let playerAvailableList = playerList.filter(player =>  player.id !== positions[action.newValue.index].playerId);
      console.log(playerAvailableList);
      return { 
       ...state,
       positions: positions,
       players: playerAvailableList
      }

    case UPDATE_POSITION:
      var positions = [...state.positions]; 
      positions[action.newValue.index].lastDropped = action.newValue.lastDropped;
      return { 
       ...state,
       positions: positions
      }

    case UPDATE_LISTPLAYERS:
      var playerList = [...state.players]; 

      playerList[action.newValue] = action.newValue
      return { 
        ...state,
        players: playerList,
      }

    default:
      return state;
  }
};