var GameBoard = React.createClass({displayName: "GameBoard",
	render: function() {
		return
		React.createElement("table", {style: "width:100%"}, 
		  React.createElement("tr", null, 
		    React.createElement("th", null, "Name"), 
		    React.createElement("th", {colspan: "2"}, "Telephone")
		  ), 
		  React.createElement("tr", null, 
		    React.createElement("td", null, "Bill Gates"), 
		    React.createElement("td", null, "555 77 854"), 
		    React.createElement("td", null, "555 77 855")
		  )
		)
	}
});

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