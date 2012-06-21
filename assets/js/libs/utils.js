/**
 * Utils function list
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 */
var utils = {

	/**
	 * Display Log
	 * @param  {string} message
	 * @param  {object} object
	 */
	log: function (message, object) {
		if (typeof console !== "undefined") {
			if (!object) {
				console.log(message);
			} else {
				console.log(message, object);
			}
		}
	}
};