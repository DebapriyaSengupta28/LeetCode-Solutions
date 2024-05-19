// 2625. Flatten Deeply Nested Array

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function(arr, n) {
    function flatten(array, currentDepth) {
        if (currentDepth >= n) {
            // If the current depth is equal to or exceeds n, return the array as is
            return array;
        }
        
        // Initialize an empty array to collect the flattened result
        let result = [];
        
        // Iterate through each element in the array
        for (let element of array) {
            if (Array.isArray(element)) {
                // If the element is an array, recursively flatten it
                result.push(...flatten(element, currentDepth + 1));
            } else {
                // If the element is not an array, add it directly to the result
                result.push(element);
            }
        }
        
        return result;
    }
    
    // Start the flattening process from depth 0
    return flatten(arr, 0);
};