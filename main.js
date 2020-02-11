agGrid.initialiseAgGridWithAngular1(angular);

var module = angular.module("example", ["agGrid"]);

module.controller("exampleCtrl", function($scope) {
/*
    var columnDefs = [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ];

    var rowData = [
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ];

    $scope.gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData
    };*/

});

module.directive('dbpGrid', function($parse) {
	return {
		restrict: 'E',
		template:`<div ag-grid="{gridOptions}" class="ag-theme-balham" style="height: 100%;" ></div>`,
		replace:true,
		transclude: false,
		scope:false,
		compile: function($scope, tElement, tAttr){
		  			var columnDefs = [
				{headerName: "Make", field: "make"},
				{headerName: "Model", field: "model"},
				{headerName: "Price", field: "price"}
			];

			var rowData = [
				{make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
				{make: "Porsche", model: "Boxter", price: 72000}
			];
			$scope.gridOptions = {
				columnDefs: columnDefs,
				angularCompileRows: true,
				groupHeaders: true,
				rowData: rowData,
				enableColResize: true,
				enableFilter: true,
				enableSorting: true,
				debug: true,
				onGridReady: function() {
					$scope.gridOptions.api.setRowData($scope.gridOptions.rowData);
				}
	

				
			};	
		},	
		controller:function($scope){
			console.log("controller");
		
		
		},
		link:function($scope, element, atttributes) {
			console.log("link");
			
			var columnDefs = [
				{headerName: "Make", field: "make"},
				{headerName: "Model", field: "model"},
				{headerName: "Price", field: "price"}
			];

			var rowData = [
				{make: "Toyota", model: "Celica", price: 35000},
				{make: "Ford", model: "Mondeo", price: 32000},
				{make: "Porsche", model: "Boxter", price: 72000}
			];
		/*	$scope.gridOptions = {
				columnDefs: columnDefs,
				angularCompileRows: true,
				groupHeaders: true,
				rowData: rowData,
				enableColResize: true,
				enableFilter: true,
				enableSorting: true,
				debug: true,
				onGridReady: function() {
					$scope.gridOptions.api.setRowData($scope.gridOptions.rowData);
				}
	

				
			};	*/
			

			//$scope.gridOptions.api.refreshView(); 
			/*var gridOptions = $scope.gridOptions = {
				columnDefs: columnDefs,
				rowData: rowData,
				debug: true
				
			};	
*/
		 
        /* element.ready(function(){
            $scope.$apply(function(){
				console.log("8888888888888888888");
				$scope.gridOptions.data = rowData;
                var func = $parse(atttributes.elemReady);
                func($scope);
            })
          })*/
			/*
			
			gridOptions.onReady = function (params) {
				console.log("hellllll");
				gridOptions.api.setRowData(rowData);
			}
			setTimeout(function () {
				
			}, 500);
			*/
			/*onGridReady: function() {
				console.log("on ready state");
			}
		
			setTimeout(function () {
				$scope.gridOptions = {
					columnDefs: columnDefs,
					rowData: rowData
				}
				$scope.$apply($scope.gridOptions);
			}, 500);
			
			*/
			
			
			//$timeout(function() {$scope.gridOptions.api.setRowData(rowData);});
			//$scope.$apply();
			//$scope.gridOptions.api.redrawRows();
			//$scope.gridOptions.api.redrawRows({rowNodes: rowData});
		}
	}
});