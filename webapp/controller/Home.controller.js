sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller,MessageToast) {
	"use strict";

	return Controller.extend("employeelist.EmployeeList.controller.Home", {
		onInit: function () {

		},
		onListItemPress: function(oEvent){
			var router = this.getOwnerComponent().getRouter();
			router.navTo("Detail",{
				employeePath: window.encodeURIComponent(oEvent.getSource().getBindingContext("employee").getPath().substr(1))
			});
		}
	});
});