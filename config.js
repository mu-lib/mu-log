/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
	"module",
	"mu-merge"
], function (module, merge) {
	/**
	 * Provides configuration for the logging package
	 * @class log.config
	 * @protected
	 * @alias feature.config
	 */

	return merge.call({
		/**
		 * Sinks that the {@link log.sink.forward} logger will use
		 * @cfg {log.console[]} sinks
		 */
		"sinks": []
	}, module.config());
});