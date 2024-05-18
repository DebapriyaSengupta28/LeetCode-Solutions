// 2637. Promise Time Limit

/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            // Create a timer that will reject the promise if the time limit is exceeded
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
            
            // Call the original function and handle its resolution/rejection
            fn(...args).then((result) => {
                clearTimeout(timer);
                resolve(result);
            }).catch((error) => {
                clearTimeout(timer);
                reject(error);
            });
        });
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */