module.exports = function (initialObject) {
  var arguments = Array.from(arguments).slice(1);
  var shouldReturnNull = false;
  var current = initialObject;
  var idx = 0;

  while (idx < arguments.length) {
    current = current[arguments[idx]];
    if (current === null || current === undefined) {
      shouldReturnNull = true;
      break;
    }
    idx+=1;
  }

  if (shouldReturnNull) {
    return null;
  } else {
    return current;
  }
}
