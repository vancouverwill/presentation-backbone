/**
 * Render a unique link row
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var LinkView = Backbone.View.extend({

	tagName: 'tr',
	template: $("#tpl-link").html(),
	model: null,

	/**
	 * Events
	 */
	events: {
		"click .delete": "clear"
	},

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
	 * Delete the model
	 */
	clear: function (e) {
		e.preventDefault();
		this.model.destroy();
		this.$el.remove();
	}
});