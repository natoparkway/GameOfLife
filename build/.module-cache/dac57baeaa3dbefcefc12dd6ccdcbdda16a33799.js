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
    React.createElement(SVGComponent, {height: "100", width: "100"}, 
        React.createElement(Circle, {cx: "50", cy: "50", r: "25"})
    ),
    document.getElementById('example')
);