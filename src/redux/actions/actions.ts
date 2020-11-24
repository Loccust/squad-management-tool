import { UPDATE_PLAYER, UPDATE_POSITION, UPDATE_LISTPLAYERS } from './action-types';

export const setDropPlayer = (playerId, index, text) => ({
    type: UPDATE_PLAYER,
    newValue: {
      playerId,
      index,
      text
    }
  });

  export const setDropPosition = (index, lastDropped) => ({
    type: UPDATE_POSITION,
    newValue: {
      index,
      lastDropped
    }
  });

  export const setPlayersList = value => ({
    type: UPDATE_LISTPLAYERS,
    newValue: value
  });