import { UPDATE_DROP } from './action-types';

export const DropCard = value => ({
    type: UPDATE_DROP,
    newValue: value
  });