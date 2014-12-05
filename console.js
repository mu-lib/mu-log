/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"./methods",
	"poly/array",
	"poly/function"
], function (METHODS) {
	"use strict";

	/**
	 * This class implements the {@link log.logger} API.
	 * @localdoc
	 * On platforms where the native `console` object doesn't support the full {@link log.logger} API,
	 * this class acts like a polyfill for the missing methods.
	 * @class log.console
	 * @implement log.logger
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
			me[method] = this.call(console[method] || nop, console);
		}, Function.prototype.bind);

		return me;
	}).call({}, ( this || window ).console || {});
});