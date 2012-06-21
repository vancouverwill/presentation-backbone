/*global User, invokeTwitter */

/**
 * Render the links container
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var LinksView = Backbone.View.extend({

	el: $("#links-container"),
	template: $("#tpl-links").html(),

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
	},

	/**
	 * Update user name
	 */
	updateName: function (name) {
		name = name || 'World';
		$('#hello-name', this.el).html(name);
	},

	/**
	 * Detect change on name input
	 */
	inputChangeName: function () {
		this.updateName($('#hello-input', this.el).val());
	},

	/**
	 * Clear container
	 */
	clearContainer: function () {
		this.$el.empty();
	}

});