// 2727. Is Object Empty

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        // Check if array is empty
        return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
        // Check if object is empty
        return Object.keys(obj).length === 0;
    } else {
        // If it's not an array or object, throw an error (not necessary per constraints)
        throw new TypeError("Input must be an object or array");
    }
};