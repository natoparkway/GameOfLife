var SVGComponent = React.createClass({displayName: "SVGComponent",
    render: function() {
        return React.createElement("svg", React.__spread({},  this.props), this.props.children);
    }
});

var Circle = React.createClass({displayName: "Circle",
    render: function() {
        return (
        	React.createElement(SVGComponent, {height: "50", width: "50"}, 
    				React.createElement("circle", React.__spread({},  this.props), this.props.children)
    			)
        );
    }
});

var GameBoard = React.createClass({displayName: "GameBoard",
	render: function() {
		return (
			React.createElement("table", null, 
				React.createElement("tr", null, 
	    		React.createElement(Circle, {cx: "25", cy: "25", r: "25"}), 
	    		React.createElement(Circle, {cx: "25", cy: "25", r: "25"}), 
	    		React.createElement(Circle, {cx: "25", cy: "25", r: "25"})
	  		)
			)
		);
	}
});



React.render(
	React.createElement(GameBoard, null),
	document.getElementById('example')
);



// React.render(
// 		<Circle cx="50" cy="50" r="25"/>,
//     document.getElementById('example')
// );