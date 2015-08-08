var GameBoard = React.createClass({displayName: "GameBoard",
	render: function() {
		return (
			React.createElement("table", null, 
				React.createElement("tr", null, 
	    		React.createElement("td", null, "Jill"), 
	    		React.createElement("td", null, "Smith"), 
	    		React.createElement("td", null, "50")
	  		)
			)
		);
	}
});



// React.render(
// 	<GameBoard></GameBoard>,
// 	document.getElementById('example')
// );

var SVGComponent = React.createClass({displayName: "SVGComponent",
    render: function() {
        return React.createElement("svg", React.__spread({},  this.props), this.props.children);
    }
});

var Circle = React.createClass({displayName: "Circle",
    render: function() {
        return (
        	React.createElement("circle", React.__spread({},  this.props), this.props.children)
        	);
    }
});

React.render(
    React.createElement(SVGComponent, {height: "10", width: "10"}, 
        React.createElement(Circle, {cx: "50", cy: "50", r: "25"})
    ),
    document.getElementById('example')
);