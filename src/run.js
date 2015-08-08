var SVGComponent = React.createClass({
    render: function() {
        return <svg {...this.props}>{this.props.children}</svg>;
    }
});

var Cell = React.createClass({
    render: function() {
        return (
        	<td>
	        	<SVGComponent height="10" width="10">
	    				<circle cx="5" cy="5" r="5" fill={this.props.color}></circle>
	    			</SVGComponent>
    			</td>
        );
    }
});


var CellRow = React.createClass({
	render: function() {
		var cells = [];
		this.props.cells.forEach(function(cellLife) {
			var color = GamePlay.makeCellColor(cellLife)
			cells.push(<Cell key={cells.length} color={color}/>)
		})

		return (
			<tr>
    		{cells}
  		</tr>
		);
	},

});


var GameBoard = React.createClass({
	getInitialState: function() {
		return {cells: GamePlay.generateGrid(this.props.size)};
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
			rows.push(<CellRow key={rows.length} cells={cellsInRow}/>)
		})

		return (
			<table className="game-grid">
				{rows}
			</table>
		);
	}
});

React.render(
	<GameBoard size="30"></GameBoard>,
	document.getElementById('container')
);


