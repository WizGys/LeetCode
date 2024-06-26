/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let index = 0;

    while (index <= end && start < end) {
        if (nums[index] === 0) {
            nums[index] = nums[start];
            nums[start] = 0;
            start++;
            index++;
        } else if (nums[index] === 2) {
            nums[index] = nums[end];
            nums[end] = 2;
            end--;
        } else {
            index++;
        }
    }
};