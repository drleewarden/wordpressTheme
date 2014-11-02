 var americaTrip = angular.module('americaTrip', [])
 .controller('mainBodyControl', function($scope, $http){
	 $scope.init = function() {
     $scope.custom = true;
     showMenu();
	 	$scope.mainBodyControl();
	 	//$scope.isotope();
	 }

   $scope.toggleCustom = function() {
     
       $scope.custom = $scope.custom === false ? true: false;
   }
	function showMenu(){
		   $('#secondary').hide();
		   $('#showMenu').toggle(function(){
			   $('#secondary').show();
		   }, function(){
		   $('#secondary').hide();
		   		
		   })
		   
	   }	   
   

	$scope.mainBodyControl = function(){

		$http({method: 'GET', url: '/?json=1'}).
		success(function(data, status, headers, config) {

	      $scope.posts = data.posts;
	      console.log(data.posts);

	    }).error(function(data, status, headers, config) {
	      // called asynchronously if an error occurs
	      // or server returns response with an error status.
	    });
	    }

	    $scope.isotope = function(){

		    $(window).bind("load", function() {
			$('.isotopeX').delay(100).isotope({
			  // options
			  itemSelector : '.element-item',
			  layoutMode : 'fitRows'
		  	});
		});
	    }


		// end angular


 });
