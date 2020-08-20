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
    case constants.QUICK_SORT:
      animations = getQuickSortAnimations(numbers);
      break;
    default:
      animations = [];
  }
  return animations;
};

const getBubbleSortAnimations = (numbers) => {
  return bubbleSort(numbers);
};

const getSelectionSortAnimations = (numbers) => {
  return selectionSort(numbers);
};

const getInsertionSortAnimations = (numbers) => {
  return insertionSort(numbers);
};

const getQuickSortAnimations = (numbers) => {
  return quickSortWrapper(numbers);
};

const insertionSort = (arr) => {
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

const selectionSort = (arr) => {
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

const bubbleSort = (arr) => {
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

const quickSortWrapper = (arr) => {
  const animations = [];
  quickSort(arr, animations, 0, arr.length - 1);
  return animations;
};

const quickSort = (arr, animations, left, right) => {
  let len = arr.length,
    pivot,
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, animations, pivot, left, right);

    //sort left and right
    quickSort(arr, animations, left, partitionIndex - 1);
    quickSort(arr, animations, partitionIndex + 1, right);
  }

  return arr;
};

const partition = (arr, animations, pivot, left, right) => {
  let pivotValue = arr[pivot],
    partitionIndex = left;

  for (var i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      animations.push([i, partitionIndex]);
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  animations.push([right, partitionIndex]);
  swap(arr, right, partitionIndex);
  return partitionIndex;
};

export const getRandomNumbers = (count) => {
  let numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(getRandomInt(3, 299));
  }
  return numbers;
};

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export default getAnimations;
