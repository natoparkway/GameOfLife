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



React.render(
	React.createElement(GameBoard, null),
	document.getElementById('example')
);

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

// React.render(
//     <SVGComponent height="10" width="10">
//         <Circle cx="0" cy="0" r="10" />
//     </SVGComponent>,
//     document.getElementById('example')
// );