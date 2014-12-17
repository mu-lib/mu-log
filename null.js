/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"./methods",
	"poly/array"
], function (METHODS) {
	"use strict";

	/**
	 * @class log.null
	 * @implement log.console
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