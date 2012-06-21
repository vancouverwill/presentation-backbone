/*global User, invokeTwitter */

/**
 * Render the homepage view
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var ContentView = Backbone.View.extend({

	el: $("#hello-container"),
	template: $("#tpl-hello").html(),

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
		'change #hello-input': 'inputChangeName'
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
	clear: function () {
		this.$el.empty();
	}

});