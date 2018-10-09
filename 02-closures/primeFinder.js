
var isPrime = (function(){
	var cache = {};
	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('processing ', n);
		cache[n] = true;
		for(var index = 2; index <= (n/2); index++){
			if (n % index === 0){
				cache[n] = false;
				break;
			}
		}
		return cache[n];
	}
})();

var isPrime = (function(){
	var cache = {};

	function checkPrime(n){
		console.log('processing ', n);
		for(var index = 2; index <= (n/2); index++){
			if (n % index === 0){
				return false;
			}
		}
		return true;
	}
	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		cache[n] = checkPrime(n);
		return cache[n];
	}
})();


var isOddOrEven = (function(){
	var cache = {};

	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		console.log('processing ', n);
		cache[n] = n % 2 === 0 ? 'even' : 'odd';
		return cache[n];
	}
})();

var isOddOrEven = (function(){
	var cache = {};

	function checkOddOrEven(n){
		console.log('processing ', n);
		return n % 2 === 0 ? 'even' : 'odd';
	}
	return function(n){
		if (typeof cache[n] !== 'undefined')
			return cache[n];
		
		cache[n] = checkOddOrEven(n);
		return cache[n];
	}
})();


function memoize(fn){
	var cache = {};
	return function(){
		var key = JSON.stringify(arguments);
		if (typeof cache[key] !== 'undefined')
			return cache[key];
		
		cache[key] = fn.apply(this, arguments);
		return cache[key];
	}
}
