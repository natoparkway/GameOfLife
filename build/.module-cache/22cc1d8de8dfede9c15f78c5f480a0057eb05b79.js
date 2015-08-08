GamePlay = (function () {
	function stepForward(cellBoard) {
		cellBoard = cellBoard.slice()
		for(var r = 0; r < cellBoard.length; r++) {
			for (var c = 0; c < cellBoard[0].length; c++) {
				cellBoard[r][c] += 1;
			}
		}

		return cellBoard;
	}


	return {
		stepForward: stepForward
	};

})();