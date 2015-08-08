var Circle = React.createClass({displayName: "Circle",
    render: function() {
        return React.createElement("circle", React.__spread({},  this.props), this.props.children);
    }
});

React.render(
	React.createElement(Circle, {height: "50", width: "50"}),
	document.getElementById('example')
);


$('body').click(function(event) {
	console.log(event);
})