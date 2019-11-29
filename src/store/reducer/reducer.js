import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import * as constants from "../../constants/constants";

const initialState = {
  numbers: [],
};

const getRandomNumbers = () => {
  let numbers = [];
  for (let i = 0; i < constants.NUMBER_OF_ARRAY_BARS; i++) {
    numbers.push(getRandomInt(20, 599));
  }
  return numbers;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_NUMBERS:
      const numbers = getRandomNumbers();
      return updateObject(state, { numbers: numbers });
    case actionTypes.SWAP:
      const newNumbers = state.numbers.slice();
      const number = newNumbers[action.indices[0]];
      newNumbers[action.indices[0]] = newNumbers[action.indices[1]];
      newNumbers[action.indices[1]] = number;
      return updateObject(state, { numbers: newNumbers });
    default:
      return state;
  }
};

export default reducer;
