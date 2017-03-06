(function() {
	var body = document.getElementsByTagName("body")[0];

	var Timer = function() {
		this.time = 0;
		this.start = function(t, callback) {
			this.time = t;
			while (this.time >= 0) {
				this.time--;
			}
			callback();
		}
	};

	var Color = function(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	var Tomato = function() {
		this.ripeColor = new Color(245, 50, 41);
		this.rawColor = new Color(41, 255, 41);
	}
})();
