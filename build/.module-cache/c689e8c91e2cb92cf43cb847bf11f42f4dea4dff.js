Utils = (function () {
	function componentToHex(c) {
	 	var hex = c.toString(16);
	 	return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
	 	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	function makeGrid(rows, cols) {
		var grid = new Array(rows);
		for(var i = 0; i < cols; i++) {
			grid[i] = new Array(cols);
		}
	}

	return {
		rgbToHex: rgbToHex,
		makeGrid: makeGrid
	};

})();