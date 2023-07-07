function countZeroes(arr) {
   
    let rightIdx = arr.length - 1;
    let leftIdx = 0;
    let midIdx;
    let midVal;
  
    while (rightIdx >= leftIdx) {
      midIdx = Math.floor((rightIdx + leftIdx) / 2);
      midVal = arr[midIdx];
        
      if (midVal === 0) {
        rightIdx = midIdx - 1;
      } else if (midVal === 1) {
        leftIdx = midIdx + 1;
      }
    }
   
    return arr.length - rightIdx - 1;
    


}

module.exports = countZeroes