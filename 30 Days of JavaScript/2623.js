// 2623. Memoize

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    let callCount = 0;
    
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            callCount++;
            return result;
        }
    }
}

function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const actions = ["call", "getCallCount"];
const values = [[5], []];

function execute(fnName, actions, values) {
    let result = [];
    let memoizedFn;

    if (fnName === "sum") {
        memoizedFn = memoize(sum);
    } else if (fnName === "fib") {
        memoizedFn = memoize(fib);
    } else if (fnName === "factorial") {
        memoizedFn = memoize(factorial);
    }

    for (let i = 0; i < actions.length; i++) {
        const action = actions[i];
        const args = values[i];

        if (action === "call") {
            result.push(memoizedFn(...args));
        } else if (action === "getCallCount") {
            result.push(callCount);
        }
    }

    return result;
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */