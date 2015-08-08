
Utils = (function () {
	function componentToHex(c) {
	 	var hex = c.toString(16);
	 	return hex.length == 1 ? "0" + hex : hex;
	}

	function rgbToHex(r, g, b) {
	 	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	}

	function makeGrayForCell(cellLife) {
		var grayScaled = 21 * cellLife;
		return rgbToHex(21 * cellLife, 21 )
	}

	return {
		rgbToHex: rgbToHex
	};

})();