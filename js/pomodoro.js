(function() {
	var Timer = function() {
		var startTime = Date.now();
		var running = false;

		this.reset = function() {
			console.log("RESET");
			console.log(startTime);
		}

		return {
			reset: reset
		};
	};

	Timer().reset();

})();
