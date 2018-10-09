var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
];

function describe(title, fn){
	console.group(title);
	fn();
	console.groupEnd();
}
/* sort, filter, groupBy */

describe('Initial List', function(){
	console.table(products);
});

describe('Sort', function(){
	describe('Default Sort - [products by id]', function(){
		function sort(){

		}
		sort();
		console.table(products);
	});

	/*describe('Any list by any attribute', function(){
		describe('Products by cost', function(){
			//sort();
			console.table(products);
		});

		describe('Products by units', function(){
			//sort();
			console.table(products);
		});
	});*/
});

/*describe('Filter', function(){
	describe('Default filter - [stationary products]', function(){
		//filter
		console.table(products);
	});
});*/
