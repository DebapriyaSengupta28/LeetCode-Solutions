// 2724. Sort By

/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    // Map the array to a new array of objects with the original value and the computed key
    const mapped = arr.map((element) => {
        return { value: element, key: fn(element) };
    });

    // Sort the mapped array based on the computed key
    mapped.sort((a, b) => a.key - b.key);

    // Extract the sorted values from the mapped array
    return mapped.map((element) => element.value);
};