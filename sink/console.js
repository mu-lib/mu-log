/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"./methods",
	"poly/array"
], function ConsoleModule(METHODS) {
	"use strict";

	/**
	 * This class implements the {@link log.console} API and can acts like a sink for {@link log.sink.forward}.
	 * @localdoc
	 * On platforms where the native `console` object doesn't support the full {@link log.console} API,
	 * this class acts like a polyfill for the missing methods.
	 * @class log.sink.console
	 * @implement log.console
	 * @singleton
	 * @alias feature.logger
	 */

	/**
	 * Creates a poly-filled version of the console object
	 * @method constructor
	 * @param {console} console Client console object
	 * @ignore
	 */
	return (function (console) {
		var me = this;
		var nop = function () {};

		METHODS.forEach(function (method) {
			me[method] = console[method] || nop;
		});

		return me;
	}).call({}, console || {});
});