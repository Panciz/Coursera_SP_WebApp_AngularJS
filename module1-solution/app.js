(function () {
'use strict';

angular.module('LaunchCheckerApp', [])
.controller('LaunchCheckerController', MsgController);

const MIN_WORD=3;


var countWord=function(text){
	if(text.length<=0){
		return "Please Enter Data First";
	}
	var words = text.split(/\s*,\s*/);
	console.log(words);
	var wordsNum =0;

	words.forEach(word=>{
			if(word.trim().length>0)
				wordsNum++;
	});
	console.log(wordsNum);
	if(wordsNum<=0){
		return "Please Enter Data First";
	}
	if(wordsNum<=MIN_WORD){
		return "Enjoy!";
	}else{
		return "Too much!";
	}
}

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.textValue = "";
  $scope.message="";
  $scope.checkWord=function(){
          $scope.textValue=$scope.textValue ?  $scope.textValue.trim() : "";
	  $scope.message=countWord($scope.textValue);
  }
}

})();
