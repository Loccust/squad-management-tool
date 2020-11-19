import { UPDATE_DROP } from './action-types';

export const dropItem = (dropped, index, text) => ({
    type: UPDATE_DROP,
    payload: {
      dropped,
      index,
      text
    }
  });