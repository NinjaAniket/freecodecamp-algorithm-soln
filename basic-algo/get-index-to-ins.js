function getIndexToIns(arr, num) {
  if (arr.indexOf(num) == -1) {
    arr.push(num);
  }

  let sortedArr = arr.sort((a, b) => a - b);

  const findPos = (sortedArr) => sortedArr >= num;

  let findidx = arr.findIndex(findPos);

  return findidx;
}

getIndexToIns([2, 5, 10], 15);
