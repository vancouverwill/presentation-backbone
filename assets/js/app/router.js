/*global HeaderView, HelloView, LinksView */

/**
 * Main Router of the application
 */
var Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"clear": "clear",
		"links": "links",
		"hello": "hello",
		"hello/:name": "helloName"
	},
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
	 * Render HomePage
	 */
	home: function () {
	},

	/**
	 * Render HomePage
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
	 * Say Hello!
	 */
	links: function () {
		Invoke.app.views.linksView.render();
	},

	/**
	 * Clear
	 */
	clear: function () {
		Invoke.app.views.helloView.clearContainer();
		Invoke.app.views.linksView.clearContainer();
	}
});