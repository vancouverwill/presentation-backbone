/*global Links, LinkView */


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

		// cache links collection
		this.collection = new Links();

		// Event binding
		this.collection.bind('add', this.addLink, this);
	},

	/**
	 * Events
	 */
	events: {
		"submit #links-form": "submitForm"
	},

	/**
	 * Render the view
	 */
	render: function () {
		var self = this;
		this.$el.html(this.template).show();

		// Cache elements
		this.inputTitle = $("#links-form-title", this.el);
		this.inputUrl = $("#links-form-url", this.el);

		// Get links stored in localStorage
		this.collection.fetch({
			success: function (links) {
				links.each(self.addLink);
				// console.log(response);
			},
			error: function () {
				utils.log('error');
			}
		});
	},

	/**
	 * Add a link in the view table
	 */
	addLink: function (link) {
		var view = new LinkView({model: link});
		$('#links-table tbody', this.el).append(view.render().el);
	},

	/**
	 * Submit Form
	 */
	submitForm: function (e) {

		e.preventDefault();

		// Verify form
		if (!this.inputTitle.val() || !this.inputUrl.val()) {
			alert('Please fill the form');
			return;
		}

		// Create a new model link
		this.collection.create({
			title: this.inputTitle.val(),
			url: this.inputUrl.val()
		});

		// Clear form input
		this.inputTitle.val('');
		this.inputUrl.val('');
	},

	/**
	 * Clear container
	 */
	clearContainer: function () {
		this.$el.empty().hide();
	}

});