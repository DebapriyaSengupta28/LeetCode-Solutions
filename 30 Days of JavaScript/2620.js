// 2620. Counter

function createCounter(n) {
    return function() {
        return n++;
    };
}