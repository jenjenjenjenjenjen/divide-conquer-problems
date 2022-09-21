function findRotationCount(arr) {
  let low = 0;
  let high = arr.length - 1;
    while (low <= high) {
        let middleIdx = low + Math.floor((low + high) / 2);
        let prev = (middleIdx - 1 + arr.length) % arr.length;
        let next = (middleIdx + 1) % arr.length;
        if (arr[middleIdx] <= arr[prev] && arr[middleIdx] <= arr[next]) {
            return middleIdx;
        } else if (arr[middleIdx] <= arr[high]) {
            high = middleIdx -1;
        } else if (arr[middleIdx] >= arr[low]) {
            low = middleIdx +1;
        }
    }
    return -1;
}

module.exports = findRotationCount