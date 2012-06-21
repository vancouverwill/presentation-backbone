/*global $LAB, Invoke, Router */
/**
 * Bootloader for the js app 
 * - Load all relevant scripts in the required order
 * - Start the js application router
 * 
 * Convention: https://github.com/maxparm/Frontend-Convention
 * @requires Invoke.Env.scripts
 */
$LAB.script(Invoke.Env.scripts.vendors)
	.wait()
	.script(Invoke.Env.scripts.libs)
	.wait()
	.script(Invoke.Env.scripts.application)
	.wait(function () {


		Invoke.app.router = new Router();
		Backbone.history.start();

		/**
		 * Init Facebook and start application
		 * @return {[type]} [description]
		 */
		// function fbAsyncInit() {
		//	Facebook.init(Invoke.Env.fb.init_args);
		//	Invoke.app.router = new Router();
		// }

		// if (window.FB) {
		//	fbAsyncInit();
		// } else {
		//	window.fbAsyncInit = fbAsyncInit;
		// }
	});