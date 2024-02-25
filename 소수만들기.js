// 문제 설명
// 주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 solution 함수를 완성해주세요.

const solution = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    console.log("i ::", nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      console.log("j ::", nums[j]);
      for (let k = j + 1; k < nums.length; k++) {
        console.log("k ::", nums[k]);
        let sum = nums[i] + nums[j] + nums[k];
        console.log(`${nums[i]} + ${nums[j]} + ${nums[k]}`);
        if (isPrime(sum)) count++;
      }
    }
  }
  // console.log(arr);
  return count;
};

function isPrime(sum) {
  for (let i = 2; i < sum; i++) if (sum % i === 0) return false;
  return sum > 1;
}

console.log(solution([1, 2, 7, 6, 4]));

// 해설 및 다른 사람 풀이
