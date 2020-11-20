import { UPDATE_PLAYER, UPDATE_POSITION } from './action-types';

export const setDropPlayer = (index, text) => ({
    type: UPDATE_PLAYER,
    newValue: {
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