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
			var color = GamePlay.makeCellColor(cellLife)
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
		return {cells: GamePlay.generateGrid(10)};
	},

	tick: function() {
		this.setState({cells: GamePlay.stepForward(this.state.cells)})
	},

	componentDidMount: function() {
		this.interval = setInterval(this.tick, 100);
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
	React.createElement(GameBoard, {size: "100"}),
	document.getElementById('example')
);


