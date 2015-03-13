/**
 * @license MIT http://mu-lib.mit-license.org/
 */
define([
	"./methods",
	"poly/array"
], function (METHODS) {
	"use strict";

	/**
	 * @class mu.log.null
	 * @implement mu.log.console
	 * @singleton
	 * @localdoc
	 * This class maps every log method to a [nop](https://en.wikipedia.org/wiki/NOP) function,
	 * effectively suppressing all logging.
	 * @alias feature.logger
	 */

	return (function () {
		var me = this;
		var nop = function () {};

		METHODS.forEach(function (method) {
			me[method] = nop;
		});

		return me;
	}).call({});
});