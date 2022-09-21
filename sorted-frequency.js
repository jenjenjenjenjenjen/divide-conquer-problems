function binarySearch(arr, val) {

    let leftIdx = 0;
    let rightIdx = arr.length - 1;
  
    while (leftIdx <= rightIdx) {
      let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
      let middleVal = arr[middleIdx];
  
      if (middleVal < val) {
        leftIdx = middleIdx + 1;
      } else if (middleVal > val) {
        rightIdx = middleIdx - 1;
      } else {
        return middleIdx;
      }
    }
    return -1;
  }

function sortedFrequency(arr, val) {
    let index = binarySearch(arr, val);
    if (index === -1) return -1;
    let count = 1;
    let left = index -1;
    while (left >= 0 && arr[left] === val) {
        count++, left--;
    }
    let right = index + 1;
    while (right < arr.length && arr[right] === val) {
        count++, right++;
    }
    return count;
}

module.exports = sortedFrequency