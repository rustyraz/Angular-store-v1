(function(){
	var storeapp = angular.module('store',['ngRoute','store-products']);

	//store controller
	/*storeapp.controller('StoreController', function(){
		this.products = items;
	});*/ 

	storeapp.controller('StoreController',['$http', function($http){
		var store = this;

		store.products = [];

		$http.get('http://localhost/2015/angular_store/products_jsonapi.php')
		.success(function(data){
			store.products = data;
			console.log(data);
		});
	}]);

	/*storeapp.config(['$routeProvider', function($routeProvider){
		$routeProvider
		.when(
			'/',
			{
				templateUrl: 'templates/index.html'
			}
			
		)
		.when(
			'/login',
			{
				templateUrl: 'templates/login.html'
			}
			
		)
		.otherwise({redirectTo:'/'});
	}]);*/

	var items = [
		{
			name : "Medium Pizza",
			price : 9,
			image: [
				{
					thumb: "images/products/thumb/mediumPizza.jpg",
					full: "images/products/mediumPizza.jpg"
				},
				{
					full: "images/products/largePizza2.jpg",
					full: "images/products/largePizza2.jpg",
					full: "images/products/largePizza2.jpg"
				}
			],
			description: "Medium size pizza with cheese",
			canPurchase : true,
			soldOut: false,
			reviews:[
				{
					rating: 1,
					comment: "Was too spicy",
					author: "nasty@comment.com"
				}
			]
		},
		{
			name : "Large Pizza",
			price : 14.99,
			image: [
				{
					thumb: "images/products/thumb/largePizza.jpg",
					full: "images/products/largePizza.jpg"
				},
				{
					full: "images/products/largePizza2.jpg",
					full: "images/products/largePizza2.jpg",
					full: "images/products/largePizza2.jpg"
				}
				
			],
			description: "Large beacon pizza with cheese and toppings",
			canPurchase : true,
			soldOut: false,
			reviews: [
				{
					rating: 5,
					comment: "Awesome stuff",
					author: "pngesh@gmail.com"
				},
				{
					rating: 4,
					comment: "Crust was good",
					author: "peter@yahoo.com"

				}
			]
		},
	];

	//panel controller
	/*storeapp.controller('PanelController', function(){ 
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		};

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});*/

	
	

	
})();