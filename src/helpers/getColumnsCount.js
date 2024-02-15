const getColumnsCount = (breakPoint) => {
  switch (breakPoint) {
    case "xs":
      return 1;
    case "sm":
      return 2;
    case "md":
      return 3;
    case "lg":
      return 3;
    default:
      return 4;
  }
}

export default getColumnsCount;