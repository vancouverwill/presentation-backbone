/**
 * Collection of contents model
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var Contents = Backbone.Collection.extend({
	model: Content,
	url: Invoke.Env.rest.contents,

	/**
	 * Sort content by asc time
	 * @param  {object} content model
	 */
	comparator: function (content) {
		return content.get("time");
	},

	/**
	 * Filter the collection with contents under time
	 * @param  {int} time
	 */
	underTime: function (time) {
		return _(this.filter(function (data) {
			return data.get("time") < time;
		}));
	}
});