const dowbleElem = (a, b) => {
  let arr = [a, b];
  let arr2 = arr.map(el => el * 2);

  if (isNaN(a) || isNaN(b)) {
    return 'error';
  };

  if (isNaN(a) && isNaN(b)) {
    return 'error';
  };

  if (!Array.isArray(arr)){
    return 'error';
  };

  return arr2;
}