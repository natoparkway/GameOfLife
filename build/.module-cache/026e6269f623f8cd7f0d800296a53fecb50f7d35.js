var SVGComponent = React.createClass({displayName: "SVGComponent",
    render: function() {
        return React.createElement("svg", React.__spread({},  this.props), this.props.children);
    }
});

var Cell = React.createClass({displayName: "Cell",
    render: function() {
        return (
        	React.createElement(SVGComponent, {height: "11", width: "11"}, 
    				React.createElement("circle", {cx: "5", cy: "5", r: "5"})
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
		var N = cellsForRow(3)
		console.log(N);
		return (
			React.createElement("tr", null, 
    		N
  		)
		);
	},


});


var GameBoard = React.createClass({displayName: "GameBoard",
	getInitialState: function() {
		var gridSize = 10;
		cells = [[]];
		for(var i = 0; i < gridSize; i++) {
			for(var j = 0; j < gridSize; j++) {
				cells[i][j] = Math.round(Math.random());
			}
		}

		return {cells: cells};
	},

	render: function() {
		var rows = [];
		this.state.cells.forEach(function(elem) {

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


