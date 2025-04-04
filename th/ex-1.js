const moveZeroes = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] !== 0) {
      let temp = nums[left];
      nums[left] = nums[right];
      nums[right] = temp;
      left++
    }
  }
  return nums
};

const result1 = moveZeroes([0, 1, 0, 3, 12]);
console.log(result1); // [1,3,12,0,0]

const result2 = moveZeroes([0]);
console.log(result2); // [0]

const result3 = moveZeroes([1, 0, 2, 0, 3, 4]);
console.log(result3); // [ 1, 2, 3, 4, 0, 0 ]