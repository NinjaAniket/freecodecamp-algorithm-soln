function titleCase(str) {
  let titleCaseStr = [];
  for (let x of str.split(" ")) {
    titleCaseStr.push(x[0].toUpperCase() + x.slice(1).toLowerCase());
  }

  return titleCaseStr.join(" ");
}

titleCase("sHoRt AnD sToUt");
