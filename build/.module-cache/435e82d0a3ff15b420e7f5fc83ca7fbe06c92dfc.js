var SVGComponent = React.createClass({displayName: "SVGComponent",
    render: function() {
        return React.createElement("svg", React.__spread({},  this.props), this.props.children);
    }
});

var Cell = React.createClass({displayName: "Cell",
    render: function() {
        return (
        	React.createElement(SVGComponent, {height: "11", width: "11"}, 
    				React.createElement("circle", {cx: "5", cy: "5", r: "5", fill: this.props.color})
    			)
        );
    }
});
function cellsForRow(numCells) {
	cells = []
	for(var i = 0; i < numCells; i++) {
		var a = String(i);
		cells.push(React.createElement(Cell, {key: "1"}))
	}
	return cells;
}

var CellRow = React.createClass({displayName: "CellRow",
	render: function() {
		this.props.cells.forEach(function(cell) {

		})

		return (
			React.createElement("tr", null, 
    		React.createElement(Cell, {color: "#3D000"})
  		)
		);
	},


});


var GameBoard = React.createClass({displayName: "GameBoard",
	getInitialState: function() {
		var gridSize = 10;
		cells = new Array(gridSize);
		for(var i = 0; i < gridSize; i++) {
			for(var j = 0; j < gridSize; j++) {
				if(j == 0) cells[i] = new Array(gridSize);
				cells[i][j] = Math.round(Math.random());
			}
		}

		return {cells: cells};
	},

	render: function() {
		var rows = [];
		this.state.cells.forEach(function(cellRow) {
			rows.push(React.createElement(CellRow, {key: rows.length, cells: cellRow}))
		})

		return (
			React.createElement("table", null, 
				rows
			)
		);
	}
});

React.render(
	React.createElement(GameBoard, null),
	document.getElementById('example')
);


