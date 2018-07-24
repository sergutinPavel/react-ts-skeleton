import * as constants from '../constants/general';

// interfaces
export interface IncrementCounter {
  type: constants.INCREMENT_COUNTER;
  payload: number
}

// actions
export function IncrementCounter(value: number = 1): IncrementCounter {
  return {
    type: constants.INCREMENT_COUNTER,
    payload: value
  };
}

// export actions types
export type GeneralActions = IncrementCounter;
