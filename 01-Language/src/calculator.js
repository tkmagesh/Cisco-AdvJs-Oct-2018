function add(x,y){
	function parseArg(n){
		if (Array.isArray(n)) return add.apply(this, n);
		if (typeof n === 'function') return parseArg(n());
		return isNaN(n) ? 0 : parseInt(n);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
}

/*
Function invocation patterns
=============================
As a method of obj
	this -> obj

As a function
	this -> window

Using the 'call' method of the function

Using the 'apply' method of the function

*/