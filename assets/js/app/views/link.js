/*global Links */

/**
 * Render a unique link row
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var LinkView = Backbone.View.extend({

	tagName: 'tr',
	template: $("#tpl-link").html(),

	/**
	 * Initialize the link view
	 */
	initialize: function () {
	},

	/**
	 * Render the view
	 */
	render: function () {
		this.$el.html(Mustache.render(this.template, this.model.toJSON()));
		return this;
	},

	/**
	 * Events
	 */
	events: {
		"click .delete": "clear"
	},

	/**
	 * Delete the model
	 */
	clear: function (e) {
		e.preventDefault();
		this.model.destroy();
		this.$el.remove();
	}
});