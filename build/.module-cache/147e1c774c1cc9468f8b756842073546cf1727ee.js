GamePlay = (function () {
	function stepForward(cellBoard) {
		var board = cellBoard.slice()
		for(var r = 0; r < cellBoard.length; r++) {
			for (var c = 0; c < cellBoard[0].length; c++) {
				var numNeighbors = countNeighbors(cellBoard, r, c);
				if(numNeighbors < 2) cellBoard[r][c] = 0;
				if(numNeighbors > 3) cellBoard[r][c] = 0;
				if(numNeighbors == 3) cellBoard[r][c] = 1;
			}
		}

		return cellBoard;
	}

	function countNeighbors(cellBoard, r, c) {
		var sum = 0;
		for(var i = -1; i <= 1; i++) {
			for(var j = -1; j <= 1; j++) {
				if(i == 0 && j == 0) continue;

				var currRow = (cellBoard.length + r + i) % cellBoard.length;
				var currCol = (cellBoard[0].length + c + j) % cellBoard[0].length;
				sum += cellBoard[currRow][currCol] == 0;
			}
		}
	}


	function generateGrid(gridSize) {
		cells = new Array(gridSize);
		for(var i = 0; i < gridSize; i++) {
			for(var j = 0; j < gridSize; j++) {
				if(j == 0) cells[i] = new Array(gridSize);
				cells[i][j] = Math.round(Math.random());
			}
		}

		return cells;
	}

	function makeCellColor(cellLife) {
		return cellLife == 1 ? Utils.rgbToHex(0, 0, 0) : Utils.rgbToHex(255, 255, 255);
	}


	return {
		stepForward: stepForward,
		generateGrid: generateGrid,
		makeCellColor: makeCellColor
	};

})();