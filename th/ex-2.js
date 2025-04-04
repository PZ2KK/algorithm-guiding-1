const romanToInt = function (nums) {
  const romanNumber = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
  }

  let result = 0

  for (let i = 0; i < nums.length; i++) {
    const current = romanNumber[nums[i]];
    const next = romanNumber[nums[i + 1]];

    if (next > current) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
};


const result1 = romanToInt("III"); // 3
console.log(result1);

const result2 = romanToInt("LVIII"); // 58
console.log(result2);

const result3 = romanToInt("MCMXCIV"); //1994
console.log(result3);
