var GameBoard = React.createClass({displayName: "GameBoard",
	render: function() {
		return React.createElement("table", {style: "width:100%"});
	}
});

React.render(
	React.createElement(GameBoard, null),
	document.getElementById('example')
);

// var SVGComponent = React.createClass({
//     render: function() {
//         return <svg {...this.props}>{this.props.children}</svg>;
//     }
// });

// var Circle = React.createClass({
//     render: function() {
//     	console.log('hi');
//         return <circle {...this.props}>{this.props.children}</circle>;
//     }
// });

// React.render(
//     <SVGComponent height="10" width="10">
//         <Circle cx="0" cy="0" r="10" />
//     </SVGComponent>,
//     document.getElementById('example')
// );