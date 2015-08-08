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
      	React.createElement(SVGComponent, {height: "10", width: "10"}, 
      		React.createElement(Circle, React.__spread({},  this.props))
  			)
      );
    }
});

React.render(
    React.createElement(Circle, {cx: "25", cy: "25", r: "10"}),
    document.getElementById('example')
);