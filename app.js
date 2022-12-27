const _ = require('lodash');
const items = [1,[2,[3,[4]]]]
console.log(items)
const newItem =_.flattenDeep((items))
console.log(newItem)


