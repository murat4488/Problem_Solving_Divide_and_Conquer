function findFloor(arr, x) {
  //this codes are coming from findRotatedIndex function unless between lines 7 to 11
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    if (arr[middleIdx] === x) {
      return arr[middleIdx - 1];
    } else if (arr[middleIdx] === x - 1) {
      return arr[middleIdx];
    }
    if (arr[leftIdx] <= arr[middleIdx]) {
      if (arr[leftIdx] <= x && x <= arr[middleIdx]) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    } else {
      if (arr[middleIdx] <= x && x <= arr[rightIdx]) {
        leftIdx = middleIdx + 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    }
  }
  return -1;
}

module.exports = findFloor;
