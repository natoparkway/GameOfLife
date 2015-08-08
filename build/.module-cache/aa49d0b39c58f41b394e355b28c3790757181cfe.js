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

	function countNeighbors(cellBoard, r, c) {
		var sum = 0;
		for(var i = -1; i <= 1; i++) {
			for(var j = -1; i <= j; j++) {

			}
		}
	}


	return {
		stepForward: stepForward
	};

})();