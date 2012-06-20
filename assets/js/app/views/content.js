/*global User, invokeTwitter */

/**
 * Render the homepage view
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var ContentView = Backbone.View.extend({

	el: $("#content-container"),
	template: $("#tpl-content").html(),

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
		'change #content-hello-input': 'changeNameInput'
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
		$('#content-hello-name', this.el).html(name);
	},

	/**
	 * Detect change on name input
	 */
	changeNameInput: function () {
		this.updateName($('#content-hello-input', this.el).val());
	}

});