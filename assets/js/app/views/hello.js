/*global  */

/**
 * Render the hello container
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var HelloView = Backbone.View.extend({

	el: $("#hello-container"),
	template: $("#tpl-hello").html(),

	/**
	 * Initialize the homepage
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
		this.$el.html(this.template).show();
	},

	/**
	 * Update user name
	 */
	updateName: function (name) {
		name = name || 'World';
		$('#hello-name', this.el).html(name);
	},

	/**
	 * Trigered after change on name input
	 */
	inputChangeName: function () {
		this.updateName($('#hello-input', this.el).val());
	},

	/**
	 * Clear hello container
	 */
	clearContainer: function () {
		this.$el.empty().hide();
	}

});