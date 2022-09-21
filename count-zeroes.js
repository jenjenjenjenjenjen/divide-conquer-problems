function countZeroes(arr) {
  let zeroCount = 0;
  let lastIdx = arr.length - 1;
  while (zeroCount <= lastIdx) {
      let middleIdx = Math.floor((zeroCount + lastIdx)/2);
      let middleVal = arr[middleIdx];
      if(middleVal = 1) {
          zeroCount = middleIdx + 1;
      } else if (middleVal = 0) {
          zeroCount = middleIdx - 1;
      } else {
          return lastIdx - zeroCount;
      }
  }
  return -1;
}

module.exports = countZeroes