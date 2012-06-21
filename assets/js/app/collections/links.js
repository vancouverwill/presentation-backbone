/*global Link, Store */

/**
 * Collection of links model
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var Links = Backbone.Collection.extend({
	model: Link,
	localStorage: new Store("links")
});