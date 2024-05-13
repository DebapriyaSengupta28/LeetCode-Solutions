// 2626. Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // If nums is empty, return init
    if (nums.length === 0) {
        return init;
    }
    
    // Iterate through nums
    for (let i = 0; i < nums.length; i++) {
        // Update init by applying fn to init and the current element
        init = fn(init, nums[i]);
    }
    
    // Return the final value of init
    return init;
};