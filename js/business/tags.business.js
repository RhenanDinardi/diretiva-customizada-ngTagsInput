var TagsBusiness = (function () {
    'use strict';

    function Tags($http) {

        var _self = this;

        this.tags = [
			  { "text": "enrolados" },
			  { "text": "Endiabrado" },
			  { "text": "Ensino" },
			  { "text": "Corpo" },
			  { "text": "Copo" },
			  { "text": "Copulação" },
			  { "text": "Faca" },
			  { "text": "Falência" },
			  { "text": "Falador" },
			  { "text": "lalalaENlalalaCOlalalaFA" }
		];


        /**
         * @description Busca todas as tags da BO
		 * @param {String}           	query              valor do input das tags
         * @param {Function=}           _callback                   retorna para controller
         */
        this.searchAutoComplete = function (query, _callback) {

            //Aqui onde seria feita a chamada de API
			var arr = [];
			
			for(var i = 0, len = this.tags.length; i < len; i++) {
				
				console.log( query, this.tags[i].text.indexOf(query)			);
				if( this.tags[i].text.indexOf(query) !== -1 ) arr.push(this.tags[i]);
			}
					
			_callback && _callback(arr);

        }


    }
    return Tags;
})();