var math = require('./lib/math');
var tip = require('tip');
// const $ = window.jQuery
var $$ = require('jquery');
console.log($$);
var Tools = window.Tools;
console.log(math);
function hello(str) {
	console.log(Tools.slice(str));
    math.increment(0);
}
hello('Hello World.');
console.log(tip);
tip.prompt('当前总人数',math.add(5,10));
