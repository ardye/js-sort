/** Getting value from form input */
getValue = () => {
  let values = document.getElementById('number').value;
  values = values.split(' '); //Make a values become an array

  /** Remove empty array */
  if (values[values.length - 1] === '') {
    values.pop();
  }

  return values.map(Number); //Returning array as a number
};

/** Bublesort Function */
bubleSort = value => {
  let index = 0;
  let temp;
  while (index < value.length) {
    for (let i = index + 1; i <= value.length - 1; i++) {
      if (value[index] > value[i]) {
        [value[index], value[i]] = [value[i], value[index]]; //Swapping value[index] = value[i] and vice versa
      }
    }
    index++;
  }
  return value;
};

/** Quick Sort Function */
quickSort = value => {
  /** Check values array */
  if (value.length < 1) {
    return value;
  }

  let pivot = value[0];
  let left = [];
  let right = [];

  for (let i = 1; i < value.length; i++) {
    if (value[i] < pivot) {
      left.push(value[i]);
    } else {
      right.push(value[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
};

/** MergeSort Function */
mergeSort = value => {
  if (value.length === 1) {
    return value;
  } else {
    const mid = Math.floor(value.length / 2);
    const left = value.slice(0, mid);
    const right = value.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  }
};

merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

print = sortType => {
  const result = sortType(getValue(), null, null);
  document.getElementById('result').innerHTML = result;
};
