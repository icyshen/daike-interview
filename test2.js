function numberFirst(array) {
  if (array.constructor !== Array) {
    return false;
  }
  var temp;
  var i = 0;
  var j = 0;
  var length = array.length;
  while (j < length){
    while (array[i] !== 0 && i < length) {
    	i++;
      j++;
    }
    while (array[j] === 0 && j < length) {
      j++;
    }
    if (j < length) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  return array;
}
