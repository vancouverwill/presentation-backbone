/*global User, invokeTwitter */

/**
 * Render the homepage view
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var FooterView = Backbone.View.extend({

	el: $("#footer-container"),
	template: $("#tpl-footer").html(),

	/**
	 * Initialize the homepage
	 * - create user model
	 */
	initialize: function () {
	},

	/**
	 * Events
	 */
	events: {
	},

	/**
	 * Render the view
	 */
	render: function () {
		this.$el.html(this.template);
	}

});