/*global Router */
/**
 * Bootloader for the app 
 * - Load all relevant scripts in the required order
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 * @requires Invoke.Env.scripts
 */
var scripts = Invoke.Env.scripts;
$LAB.script(scripts.vendors)
	.wait()
	.script(scripts.libs)
	.wait()
	.script(scripts.application)
	.wait(function () {

		Invoke.app.router = new Router();
		Backbone.history.start();
		/**
		 * Init Facebook and start application
		 * @return {[type]} [description]
		 */
		// function fbAsyncInit() {
		// 	Facebook.init(Invoke.Env.fb.init_args);
		// 	Invoke.app.router = new Router();
		// }

		// if (window.FB) {
		// 	fbAsyncInit();
		// } else {
		// 	window.fbAsyncInit = fbAsyncInit;
		// }
	});