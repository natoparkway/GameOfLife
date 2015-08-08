var SVGComponent = React.createClass({displayName: "SVGComponent",
    render: function() {
        return React.createElement("svg", React.__spread({},  this.props), this.props.children);
    }
});

var Cell = React.createClass({displayName: "Cell",
    render: function() {
        return (
        	React.createElement("td", null, 
	        	React.createElement(SVGComponent, {height: "11", width: "11"}, 
	    				React.createElement("circle", {cx: "5", cy: "5", r: "5", fill: this.props.color})
	    			)
    			)
        );
    }
});


var CellRow = React.createClass({displayName: "CellRow",
	render: function() {
		var cells = [];
		this.props.cells.forEach(function(cellLife) {
			var color = Utils.makeGrayForCell(cellLife)
			cells.push(React.createElement(Cell, {key: cells.length, color: color}))
		})

		return (
			React.createElement("tr", null, 
    		cells
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
				cells[i][j] = Math.round(Math.random()* 10);
			}
		}

		return {cells: cells};
	},

	tick: function() {
		this.setState({cells: GamePlay.stepForward(this.state.cells)})
	},

	componentDidMount: function() {

	},

	render: function() {
		var rows = [];
		this.state.cells.forEach(function(cellsInRow) {
			rows.push(React.createElement(CellRow, {key: rows.length, cells: cellsInRow}))
		})

		return (
			React.createElement("table", {className: "game-grid"}, 
				rows
			)
		);
	}
});

React.render(
	React.createElement(GameBoard, null),
	document.getElementById('example')
);


