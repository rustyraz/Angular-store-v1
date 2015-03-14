(function(){
	var storeapp = angular.module('store-products',[]);
	//review controller
	storeapp.controller('ReviewController', ['$http',function($http){
		this.review = {};
		this.addReview = function(product){
			product.reviews.push(this.review);

			var dataObj = this.review;
			//console.log(dataObj);
			var postData = $http.post(
				'http://localhost/2015/angular_store/post_product_data.php',
				dataObj
			);

			postData.success(function(data){
				console.log(data);				
			});
			this.review = {};
		};
	}]);

	//product title directive
	storeapp.directive('productTitle', function(){
		return {
			restrict : 'A',
			templateUrl : 'product-title.html'
		};
	});

	//product panels directive
	storeapp.directive('productPanels',function(){
		return {
			restrict: 'A',
			templateUrl: 'product-panels.html',
			controller: function(){ 
				this.tab = 1;
				this.selectTab = function(setTab){
					this.tab = setTab;
				};

				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs: 'panel'
		};
	});

	

})();