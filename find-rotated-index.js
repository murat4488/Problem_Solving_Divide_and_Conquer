function findRotatedIndex(arr, target) {
  //source chatGBT
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

    if (arr[middleIdx] === target) {
      return middleIdx;
    }

    if (arr[leftIdx] <= arr[middleIdx]) {
      if (arr[leftIdx] <= target && target <= arr[middleIdx]) {
        rightIdx = middleIdx - 1;
      } else {
        leftIdx = middleIdx + 1;
      }
    } else {
      if (arr[middleIdx] <= target && target <= arr[rightIdx]) {
        leftIdx = middleIdx + 1;
      } else {
        rightIdx = middleIdx - 1;
      }
    }
  }

  return -1;
}

module.exports = findRotatedIndex;
