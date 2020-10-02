function truncateString(str, num) {
  let firstNumItems = str.substring(0, num);
  let result = firstNumItems + "...";
  if (num >= str.length) {
    return str;
  }

  return result;
}

truncateString(
  "A-tisket a-tasket A green and yellow basket",
  "A-tisket a-tasket A green and yellow basket".length + 2
);
