var statis = require('./statis');

function add(a, b) {
    statis.report('add number');
	return a + b;
}
function increment(num) {
    statis.report(String(num) + ' increment');
    return ++num;
}

module.exports = {
    file:'math.js',
    add:add,
    increment: increment
};
