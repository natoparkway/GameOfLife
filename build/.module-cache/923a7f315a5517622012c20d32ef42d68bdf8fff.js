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
    React.createElement(SVGComponent, {height: "10", width: "10"}, 
        React.createElement(Circle, {cx: "10", cy: "10", r: "10"})
    ),
    document.getElementById('example')
);