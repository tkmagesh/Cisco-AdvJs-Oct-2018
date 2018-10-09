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
			for(var i=0; i < products.length - 1; i++)
				for(var j=i+1; j < products.length; j++)
					if (products[i].id > products[j].id){
						var temp = products[i];
						products[i] = products[j];
						products[j] = temp;
					}
		}
		sort();
		console.table(products);
	});

	function sort(list, comparer){
		if (typeof comparer !== 'function' || typeof comparer !== 'string')
			return;
		var comparerFn = function(){ return 0; };
		if (typeof comparer === 'function')
			comparerFn = comparer;
		if (typeof comparer === 'string'){
			comparerFn = function(item1, item2){
				if (item1[comparer] < item2[comparer]) return -1;
				if (item1[comparer] > item2[comparer]) return 1;
				return 0
			}
		}
		for(var i=0; i < list.length - 1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
	}

	describe('Any list by any attribute', function(){
		/*function sort(list, attrName){
			for(var i=0; i < list.length - 1; i++)
				for(var j=i+1; j < list.length; j++)
					if (list[i][attrName] > list[j][attrName]){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}*/
		describe('Products by cost', function(){
			sort(products, 'cost');
			console.table(products);
		});

		describe('Products by units', function(){
			sort(products, 'units');
			console.table(products);
		});
	});

	describe('Any list by any comparer', function(){
		/*function sort(list, comparerFn){
			for(var i=0; i < list.length - 1; i++)
				for(var j=i+1; j < list.length; j++)
					if (comparerFn(list[i], list[j]) > 0){
						var temp = list[i];
						list[i] = list[j];
						list[j] = temp;
					}
		}*/

		describe('products by value [cost * units]', function(){
			var productComparerByValue = function(p1, p2){
				var p1Value = p1.cost * p1.units,
					p2Value = p2.cost * p2.units;
				if (p1Value < p2Value) return -1;
				if (p1Value > p2Value) return 1;
				return 0;
			};
			sort(products, productComparerByValue);
			console.table(products);
		});
	})
});

describe('Filter', function(){
	describe('Default filter - [stationary products]', function(){
		function filterStationaryProducts(){
			var stationaryProducts = [];
			for(var i=0, count = products.length; i < count; i++)
				if (products[i].category === 'stationary')
					stationaryProducts.push(products[i]);
			return stationaryProducts;
		}
		var stationaryProducts = filterStationaryProducts();
		console.table(stationaryProducts);
	});

	describe('Any list by any criteria', function(){
		function filter(list, criteria){
			var result = [];
			for(var i=0, count = list.length; i < count; i++)
				if (criteria(list[i]))
					result.push(list[i]);
			return result;
		}
		describe('products by cost', function(){
			describe('costly products [ cost > 50 ]', function(){
				var costlyProductCriteria = function(product){
					return product.cost > 50;
				};
				var costlyProducts = filter(products, costlyProductCriteria);
				console.table(costlyProducts);
			});
			describe('affordable products', function(){

			});
		});


		describe('products by units', function(){
			describe('understocked products [ units < 60 ]', function(){
				var understockedProductCriteria = function(product){
					return product.units < 60;
				};
				var understockedProducts = filter(products, understockedProductCriteria);
				console.table(understockedProducts);
			});
			describe('wellstocked products', function(){

			});
		});
	});
});
