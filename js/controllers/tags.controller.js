(function () {
  'use strict';

  angular
    .module('AngularStructure')
    .controller('TagsController', TagsController);

  TagsController.$inject = ['$scope', '$http', '$q'];

  /**
   * @constructor Para mais : http://mbenford.github.io/ngTagsInput/
   * */
  function TagsController($scope, $http, $q) {

	/**
	* Variables
	*/
	$scope.BO = new TagsBusiness($http);
	$scope.tagList = [];
  
    /**
     * @description Configurações iniciais
     * */
    function init() {
		
		console.log("Hello, yes this is dog.");
		
		//seta uma lista inicial de tags, pode ser vazia
		$scope.tagList = [
			{text: "MSTECH"},
			{text: "Forum"},
			{text: "Front-End"}	
		];
		
    }
	
	/**
     * @description Autocomplete das tags  por chamada de API ou JSON
     * */
	 $scope.loadTags = function (query) {
		 
		 //busca por JSON
		 //return $http.get('tags.json');
		 
		 //chamada de API	 
		 var tags = [];
		 var deferred = $q.defer();

		$scope.BO.searchAutoComplete(query, function (resp) {

			tags = resp || [];
			deferred.resolve(tags);
		});

		return deferred.promise;
		
	 };
	
	
    init();
  }
})();