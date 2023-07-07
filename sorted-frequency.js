function sortedFrequency(arr, target) {
  let lowerIdx = 0;
  let upperIdx = arr.length;
  let midIdx = Math.floor((lowerIdx + upperIdx) / 2);

  while (lowerIdx <= midIdx) {
    if (arr[midIdx] < target) {
      lowerIdx = midIdx + 1;
    } else {
      upperIdx = midIdx - 1;
    }
    midIdx = Math.floor((lowerIdx + upperIdx) / 2);
  }

  const low = lowerIdx;

  lowerIdx = 0;
  upperIdx = arr.length - 1;
  midIdx = Math.floor((lowerIdx + upperIdx) / 2);

  while (upperIdx >= midIdx) {
    if (arr[midIdx] <= target) {
      lowerIdx = midIdx + 1;
    } else {
      upperIdx = midIdx - 1;
    }
    midIdx = Math.ceil((lowerIdx + upperIdx) / 2);
  }

  const up = upperIdx;
  if (low > up) return -1;

  return up - low + 1;
}

module.exports = sortedFrequency;
