module.exports = function towelSort (matrix) {
  let res = [];
  // if (matrix.length == 0) {
  //   console.log("pusto");
  //   return [];
  // }
  console.log(matrix);
  if (!matrix) {
    return res;
  }
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      res = res.concat(matrix[i]);
    } else if (i % 2 == 1){
      res = res.concat(matrix[i].reverse());
    }
  }
  return res;
}
