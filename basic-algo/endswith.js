function confirmEnding(str, target) {
  let ends = target.length;
  let removeFrom = str.length - ends;

  let result = str.substring(removeFrom);
  if (result == target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "an");
