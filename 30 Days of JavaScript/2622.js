// 2622. Cache With Time Limit

class TimeLimitedCache {
    constructor() {
      this.cache = new Map(); // Stores the key, value, and expiration time
    }
  
    /**
     * @param {number} key
     * @param {number} value
     * @param {number} duration time until expiration in ms
     * @return {boolean} if un-expired key already existed
     */
    set(key, value, duration) {
      const currentTime = Date.now();
      const expireTime = currentTime + duration;
      const existing =
        this.cache.has(key) && this.cache.get(key).expireTime > currentTime;
  
      // Overwrite the value and expiration time for the key
      this.cache.set(key, { value: value, expireTime: expireTime });
  
      return existing;
    }
  
    /**
     * @param {number} key
     * @return {number} value associated with key
     */
    get(key) {
      const currentTime = Date.now();
      if (this.cache.has(key)) {
        const entry = this.cache.get(key);
        if (entry.expireTime > currentTime) {
          return entry.value;
        } else {
          // Remove expired entry
          this.cache.delete(key);
        }
      }
      return -1;
    }
  
    /**
     * @return {number} count of non-expired keys
     */
    count() {
      const currentTime = Date.now();
      let count = 0;
      for (const [key, entry] of this.cache.entries()) {
        if (entry.expireTime > currentTime) {
          count++;
        } else {
          // Remove expired entry
          this.cache.delete(key);
        }
      }
      return count;
    }
  }
  
  /**
   * const timeLimitedCache = new TimeLimitedCache()
   * timeLimitedCache.set(1, 42, 1000); // false
   * timeLimitedCache.get(1) // 42
   * timeLimitedCache.count() // 1
   */
  