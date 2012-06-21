/*global Invoke, HeaderView, HelloView, LinksView */

/**
 * Router of the application
 */
var Router = Backbone.Router.extend({

	/**
	 * Routhe handle by backbone app
	 */
	routes: {
		"": "home",
		"clear": "clear",
		"links": "links",
		"hello": "hello",
		"hello/:name": "helloName"
	},

	/**
	 * Initialize call
	 * - use to cache the view
	 */
	initialize: function () {
		if (!Invoke.app.views.headerView) {
			Invoke.app.views.headerView = new HeaderView();
		}
		Invoke.app.views.headerView.render();
		if (!Invoke.app.views.helloView) {
			Invoke.app.views.helloView = new HelloView();
		}
		if (!Invoke.app.views.linksView) {
			Invoke.app.views.linksView = new LinksView();
		}
	},

	/**
	 * Render Home Page
	 */
	home: function () {
	},

	/**
	 * Render Hello World Page
	 */
	hello: function () {
		Invoke.app.views.helloView.render();
	},

	/**
	 * Say Hello!
	 */
	helloName: function (name) {
		Invoke.app.views.helloView.updateName(name);
	},

	/**
	 * Render Links Page
	 */
	links: function () {
		Invoke.app.views.linksView.render();
	},

	/**
	 * Clear the containers
	 */
	clear: function () {
		Invoke.app.views.helloView.clearContainer();
		Invoke.app.views.linksView.clearContainer();
	}
});