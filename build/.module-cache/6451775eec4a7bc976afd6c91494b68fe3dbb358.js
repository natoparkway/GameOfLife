GamePlay = (function () {
	function stepForward(oldBoard) {
		var newBoard = oldBoard.slice();
		console.log(newBoard[3]);
		for(var r = 0; r < newBoard.length; r++) {
			console.log(oldBoard[r])
			for (var c = 0; c < newBoard[0].length; c++) {
				var numNeighbors = countNeighbors(oldBoard, r, c);


				if(numNeighbors < 2) newBoard[r][c] = 0;
				if(numNeighbors > 3) newBoard[r][c] = 0;
				if(numNeighbors === 2) newBoard[r][c] = oldBoard[r][c];
				if(numNeighbors === 3) newBoard[r][c] = 1;
			}
		}

		console.log("new");
		return newBoard;
	}

	function countNeighbors(cellBoard, r, c) {
		var sum = 0;
		for(var i = -1; i <= 1; i++) {
			for(var j = -1; j <= 1; j++) {
				if(i === 0 && j === 0) continue;

				var currRow = (cellBoard.length + r + i) % cellBoard.length;
				var currCol = (cellBoard[0].length + c + j) % cellBoard[0].length;
				sum += cellBoard[currRow][currCol] !== 0;
			}
		}

		return sum;
	}


	function generateGrid(gridSize) {
		cells = new Array(gridSize);
		for(var i = 0; i < gridSize; i++) {
			for(var j = 0; j < gridSize; j++) {
				if(j === 0) cells[i] = new Array(gridSize);
				cells[i][j] = i === 3 && j > 1 && j < 5 ? 1 : 0;
			}
		}

		return cells;
	}

	function makeCellColor(cellLife) {
		return cellLife === 1 ? Utils.rgbToHex(0, 0, 0) : Utils.rgbToHex(255, 255, 255);
	}


	return {
		stepForward: stepForward,
		generateGrid: generateGrid,
		makeCellColor: makeCellColor
	};

})();