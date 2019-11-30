import * as constants from "../constants/constants";

const getAnimations = (sortType, numbers) => {
  let animations = [];
  switch (sortType) {
    case constants.BUBBLE_SORT:
      animations = getBubbleSortAnimations(numbers);
      break;
    case constants.SELECTION_SORT:
      animations = getSelectionSortAnimations(numbers);
      break;
    case constants.INSERTION_SORT:
      animations = getInsertionSortAnimations(numbers);
      break;
    default:
      animations = [];
  }
  return animations;
};

const getBubbleSortAnimations = numbers => {
  return bubbleSort(numbers);
};

const getSelectionSortAnimations = numbers => {
  return selectionSort(numbers);
};

const getInsertionSortAnimations = numbers => {
  return insertionSort(numbers);
};

const insertionSort = arr => {
  let len = arr.length;
  let animations = [];

  for (let i = 1; i < len; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      animations.push([j, j - 1]);
      swap(arr, j, j - 1);
      j--;
    }
  }

  return animations;
};

const selectionSort = arr => {
  let len = arr.length;
  let animations = [];
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      animations.push([min, i]);
      swap(arr, min, i);
    }
  }
  return animations;
};

const swap = (arr, index1, index2) => {
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const bubbleSort = arr => {
  let len = arr.length,
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
