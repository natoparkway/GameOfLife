var Cell = React.createClass({
	render: function() {
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		var centerX = canvas.width / 2;
		var centerY = canvas.height / 2;
		var radius = 70;

		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
		context.fillStyle = 'green';
		context.fill();
		context.lineWidth = 5;
		context.strokeStyle = '#003300';
		context.stroke();

		console.log(context);
		return context;
	}
})

var Circle = React.createClass({
    render: function() {
        return <circle {...this.props}>{this.props.children}</circle>;
    }
});
