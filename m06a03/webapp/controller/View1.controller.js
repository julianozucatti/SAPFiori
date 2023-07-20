sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("moovi.m06a03.controller.View1", {
            onInit: function () {
                let vlayout2 = this.byId("vLayout2");
                vlayout2.bindElement("value","companyModel>/ScarrSet");
            }
        });
    });
