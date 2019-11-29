import * as actionTypes from "./actionTypes";

export const resetNumbers = () => {
  return {
    type: actionTypes.RESET_NUMBERS
  };
};

export const swap = indices => {
  return {
    type: actionTypes.SWAP,
    indices: indices
  };
};

export const setAnimations = animations => {
  return {
    type: actionTypes.SET_ANIMATIONS,
    animations: animations
  };
};
