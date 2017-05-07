jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"po/test/integration/NavigationJourneyPhone",
		"po/test/integration/NotFoundJourneyPhone",
		"po/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});