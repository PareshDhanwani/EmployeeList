sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function (Controller,UIComponent,History,MessageToast) {
	"use strict";

	return Controller.extend("employeelist.EmployeeList.controller.Detail", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("Detail").attachPatternMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").employeePath),
				model: "employee"
			});
		},
		onNavBack: function () {
			var router = this.getOwnerComponent().getRouter();
			router.navTo("RouteHome",[],true);
		}

	});

});