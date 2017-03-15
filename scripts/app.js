(function (){
	'use strict'

	angular.module('LunchCheck', [])

	.controller('LunchCheckController', ['$scope', function($scope){
	//i dont use $inject i prefer use array type for it
	
		$scope.check = "";
		$scope.erro = null;
		$scope.message = null;

		var lunchChecker = function (){
			var howMany = $scope.check.split(" ");
			var total = 0;

			// -- Start verify if have some blank spaces -- 
			for (var i = 0; i < howMany.length; i++){
				if (howMany[i] !== ""){
					total++;
				}
			};
			// -- end -- 

			if (total === 0){
				return  {
							message: "Please enter data first",
							result: false
						};
			}

			else if(total <= 3){
				return  {
							message: "Enjoy!",
							result: true
						};
			}
			else{
				return  {
							message: "Too Much!",
							result: true
						};
			}
		};

		$scope.myClick = function () {
			$scope.erro = lunchChecker().message;
			var result = lunchChecker().result;

			if(result){
				$scope.message = "messageOk";
			}
			else{
				$scope.message = "messageErro";
			}
		}
	}]);

})();