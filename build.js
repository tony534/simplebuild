// Copyright (c) 2013 Titanium I.T. LLC. All rights reserved. See LICENSE.TXT for details.
"use strict";

var promisify = require("./extensions/simplebuild-ext-promisify.js")
	.map("../examples/simplebuild-ext-header.js")
	.map;

var jshint = promisify("../tasks/simplebuild-jshint.js");
var mocha = promisify("../tasks/simplebuild-mocha.js");

jshint.validate({
	files: ["build.js", "tasks/simplebuild-jshint.js", "examples/run-barebones.js"],
	options: lintOptions(),
	globals: {}
})
.then(function() {
	return mocha.runTests({
		files: ["tasks/jshint/_jshint_runner_test.js"]
	});
})
.then(function() {
	console.log("\n\nOK");
})
.fail(function(message) {
	console.log("\n\nFAILED: " + message);
});

function lintOptions() {
	return {
		bitwise: true,
		curly: false,
		eqeqeq: true,
		forin: true,
		immed: true,
		latedef: false,
		newcap: true,
		noarg: true,
		noempty: true,
		nonew: true,
		regexp: true,
		undef: true,
		strict: true,
		trailing: true,
		node: true
	};
}