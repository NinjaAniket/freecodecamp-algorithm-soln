function findElement(arr, func) {
  let num;
  let result = arr.find((item) => item % 2 == 0);

  if (func(result)) {
    return result;
  } else {
    return "undefined";
  }
}

findElement([1, 3, 5, 8, 9, 10], (num) => num % 2 === 0);
