const LRU = require('lru-cache')
const options = {
    max: 5000,

    // for use with tracking overall storage size
    maxSize: 5000,
    sizeCalculation: (value, key) => {
        return 1
    },

    // for use when you need to clean up something when objects
    // are evicted from the cache
    dispose: (value, key, reason) => {
        console.log("dispose", key, value, reason);
    },
    disposeAfter: function (value, key, reason) {
        console.log("disposeAfter", key, value, reason);

    },

    // how long to live in ms
    ttl: 1000 * 60 * 5,
    ttlResolutiion: 1000 * 60,
    // return stale items before removing from cache?
    allowStale: false,

    updateAgeOnGet: true,
    updateAgeOnHas: false,

    // async method to use for cache.fetch(), for
    // stale-while-revalidate type of behavior
    fetchMethod: async (key, staleValue, { options, signal }) => { }
}

const cache = new LRU(options)
export default cache
