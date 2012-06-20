/*global User, invokeTwitter */

/**
 * Render the homepage view
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var HomeView = Backbone.View.extend({

	el: $("#home"),

	/**
	 * Initialize the homepage
	 * - create user model
	 */
	initialize: function () {
		var self = this;
		this.user = new User();
		this.user.bind("change:name", function () {
			self.displayName();
		});
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
		var liveEpisodeJson,
			liveEpisode,
			self = this;
		this.$el.empty();

		// Display next episode for live
		liveEpisodeJson = _.max(this.collection.toJSON(), function (episode) {
			return episode.number;
		});
		if (liveEpisodeJson) {
			liveEpisode = this.collection.get(liveEpisodeJson.id);
			utils.log('');
			self.$el.append(Mustache.render($('#tpl-home-episode-live-view').html(), liveEpisode.toJSON()));
		}

		// Show content
		$.mobile.changePage($('#home-container'), {changeHash: false});
	},

	/**
	 * Display the user name on the home view
	 */
	displayName: function () {
		$('#home-login', this.el).html(this.user.get('name'));
	},

	/**
	 * Display Facebook login dialog
	 */
	loginFb: function (e) {
		e.preventDefault();
		Invoke.app.views.homeView.user.loginToFacebook(function () {
			alert('callback');
		});
	}

});