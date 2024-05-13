// 2629. Function Composition

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    // If the array of functions is empty, return the identity function
    if (functions.length === 0) {
        return function(x) { return x; };
    } else {
        // Return a new function that applies the functions from right to left
        return function(x) {
            // Start with the initial value of x
            let result = x;
            // Apply each function from right to left
            for (let i = functions.length - 1; i >= 0; i--) {
                result = functions[i](result);
            }
            // Return the final result
            return result;
        };
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */