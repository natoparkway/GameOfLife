var SVGComponent = React.createClass({displayName: "SVGComponent",
    render: function() {
        return React.createElement("svg", React.__spread({},  this.props), this.props.children);
    }
});

var Circle = React.createClass({displayName: "Circle",
    render: function() {
    	console.log('hi');
        return React.createElement("circle", React.__spread({},  this.props), this.props.children);
    }
});

React.render(
	React.createElement(Circle, {height: "50", width: "50"}),
	document.getElementById('example')
);
