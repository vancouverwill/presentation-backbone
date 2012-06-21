/**
 * Render the header container
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var HeaderView = Backbone.View.extend({

	el: $("#header-container"),
	template: $("#tpl-header").html(),

	/**
	 * Initialize the homepage
	 */
	initialize: function () {
	},

	/**
	 * Render the view
	 */
	render: function () {
		this.$el.html(this.template);
	}

});