jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Header in the list
// * All 3 Header have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"po/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"po/test/integration/pages/App",
	"po/test/integration/pages/Browser",
	"po/test/integration/pages/Master",
	"po/test/integration/pages/Detail",
	"po/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "po.view."
	});

	sap.ui.require([
		"po/test/integration/MasterJourney",
		"po/test/integration/NavigationJourney",
		"po/test/integration/NotFoundJourney",
		"po/test/integration/BusyJourney",
		"po/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});