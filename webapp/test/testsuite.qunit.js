sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: employees",
		defaults: {
			page: "ui5://test-resources/employees/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "employees/",
				never: "test-resources/employees/"
			},
			loader: {
				paths: {
					"employees": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for employees"
			},
			"integration/opaTests": {
				title: "Integration tests for employees"
			}
		}
	};
});
