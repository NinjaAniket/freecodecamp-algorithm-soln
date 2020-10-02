function mutation(arr) {
  let result = arr[1].toLowerCase();
  return result
    .split("")
    .every((item) => arr[0].toLowerCase().indexOf(item) !== -1);
}
mutation(["floor", "for"]);
