// 2722. Join Two Arrays by ID

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const combinedArray = [...arr1, ...arr2];
    const mergedObjects = {};

    combinedArray.forEach(obj => {
        const id = obj.id;
        if (!mergedObjects[id]) {
            mergedObjects[id] = {};
        }
        // Merge properties into the merged object
        mergedObjects[id] = { ...mergedObjects[id], ...obj };
    });

    // Convert the merged objects back to an array and sort by id
    return Object.values(mergedObjects).sort((a, b) => a.id - b.id);
};