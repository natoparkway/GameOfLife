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

var CellRow = React.createClass({displayName: "CellRow",
	render: function() {
		var cellsForRow = cellsForRow(3)
		return (
			React.createElement("tr", null, 
    		"cellsForRow"
  		)
		);
	},

	cellsForRow: function(numCells) {
		return React.createElement(Cell, null) + React.createElement(Cell, null) + React.createElement(Cell, null);
	}
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


