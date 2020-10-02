function bouncer(arr) {
  let item = arr.filter((item) => Boolean(item));
  return item;
}

bouncer([7, "ate", "", false, 9]);
