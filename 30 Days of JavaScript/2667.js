// 2667. Create Hello World Function

/**
 * @return {Function}
 */
var createHelloWorld = function() {
    // Return a function that always returns "Hello World"
    return function(...args) {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */