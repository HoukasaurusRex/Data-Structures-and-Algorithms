// Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

// Example:
// Input:nums = [1,1,1,1,2], k = 2
// Output: 3

// Constraints:
// The length of the array is in range [1, 20,000].
// The range of numbers in the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraySum = function (nums, k) {
  // checkInputs(nums, k)
  let matches = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === k) {
      matches += 1
    }
    let accumulated = nums[i]
    for (let j = i; j < nums.length; j++) {
      const curr = nums[j + 1]
      accumulated += curr
      if (accumulated === k) {
        matches += 1
        continue
      }
    }
  }
  return matches
}

console.log(
  'Should be: 55 ---> ',
  subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0)
  // subarraySum([-1, -1, 2, 1], 1)
)

// console.log('Should be: 4 ---> ', subarraySum([2, 1, 1, 2, 1, 1], 4))
// 4

let matches = {
  0: 0,
  1: 5,
  2: 10,
}

matches[2] // O(n) + O(1) = O(n)

// https://leetcode.com/problems/subarray-sum-equals-k/solution/
