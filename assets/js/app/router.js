/*global HeaderView, ContentView, FooterView */

/**
 * Main Router of the application
 */
var Router = Backbone.Router.extend({
	routes: {
		"": "home",
		"hello/:name": "hello"
	},
	initialize: function () {
		if (!Invoke.app.views.headerView) {
			Invoke.app.views.headerView = new HeaderView();
		}
		if (!Invoke.app.views.contentView) {
			Invoke.app.views.contentView = new ContentView();
		}
		if (!Invoke.app.views.footerView) {
			Invoke.app.views.footerView = new FooterView();
		}
	},

	/**
	 * Render HomePage
	 */
	home: function () {
		Invoke.app.views.headerView.render();
		Invoke.app.views.contentView.render();
		Invoke.app.views.footerView.render();
	},

	/**
	 * Say Hello!
	 */
	hello: function (name) {
		Invoke.app.views.contentView.updateName(name);
	}
});