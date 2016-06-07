function productArray(array) {
  if (array.constructor !== Array) {
    return false;
  }
  var length = array.length;
  var i,
      j;
  var rearProduct = [1];
  var output = [];
  var product = 1;
  if (l < 2) {
    return false;
  }
  for (j = length - 1; j > 0; j--) {
    product = array[j] * product;
    rearProduct.push(product);
  }
  product = 1;
  output.push(rearProduct[length-1]);
  for (i = 1; i < length; i++) {
    product = product * array[i-1];
    output.push(product * rearProduct[length-1-i]);
  }
  return output;
}
