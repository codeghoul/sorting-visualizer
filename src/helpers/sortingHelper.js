import * as constants from "../constants/constants";

const getAnimations = (sortType, numbers) => {
  let animations = [];
  switch (sortType) {
    case constants.BUBBLE_SORT:
      animations = getBubbleSortAnimations(numbers);
      break;
    default:
      animations = [];
  }
  return animations;
};

const getBubbleSortAnimations = numbers => {
  return bubbleSort(numbers);
};

const swap = (arr, first_Index, second_Index) => {
  var temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
};

const bubbleSort = arr => {
  var len = arr.length,
    i,
    j,
    stop;

  const animations = [];

  for (i = 0; i < len; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1]);
        swap(arr, j, j + 1);
      }
    }
  }

  return animations;
};

export default getAnimations;
