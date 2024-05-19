// 2705. Compact Object

/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // Helper function to check if a value is an object
    const isObject = value => value && typeof value === 'object' && !Array.isArray(value);
    
    // Helper function to recursively compact objects and arrays
    const compact = (item) => {
        if (Array.isArray(item)) {
            // If item is an array, filter out falsy values and compact each element
            return item
                .map(compact) // Apply compact recursively
                .filter(Boolean); // Remove falsy values
        } else if (isObject(item)) {
            // If item is an object, create a new object with only truthy values
            return Object.entries(item).reduce((acc, [key, value]) => {
                const compactedValue = compact(value);
                if (Boolean(compactedValue)) {
                    acc[key] = compactedValue;
                }
                return acc;
            }, {});
        }
        // For non-object and non-array, return the item itself
        return item;
    };
    
    // Start the recursion with the input obj
    return compact(obj);
};