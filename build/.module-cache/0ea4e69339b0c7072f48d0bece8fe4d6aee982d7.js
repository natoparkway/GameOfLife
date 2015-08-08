var SVGComponent = React.createClass({displayName: "SVGComponent",
    render: function() {
        return React.createElement("svg", React.__spread({},  this.props), this.props.children);
    }
});

var Cell = React.createClass({displayName: "Cell",
    render: function() {
        return (
        	React.createElement(SVGComponent, {height: "11", width: "11"}, 
    				React.createElement("circle", {cx: "5", cy: "5", r: "5"}, this.props.children)
    			)
        );
    }
});
function cellsForRow(numCells) {
	cells = []
	for(var i = 0; i < numCells; i++) {
		cells.push(React.createElement(Cell, null))
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
		return {cells: [[]]};
	},

	render: function() {
		return (
			React.createElement("table", null, 
				React.createElement(CellRow, null)
			)
		);
	}
});

React.render(
	React.createElement(GameBoard, null),
	document.getElementById('example')
);


