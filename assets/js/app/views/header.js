/*global User, invokeTwitter */

/**
 * Render the homepage view
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var HeaderView = Backbone.View.extend({

	el: $("#header-container"),
	template: $("#tpl-header").html(),

	/**
	 * Events
	 */
	events: {
		'click #custom-hello': 'customHello'
	},

	/**
	 * Initialize the homepage
	 * - create user model
	 */
	initialize: function () {
	},

	/**
	 * Render the view
	 */
	render: function () {
		this.$el.html(this.template);
	},


	customHello: function () {
		
	}

});