var ItemTitle = React.createClass({
	render: function () {
		return (
			<i className={this.props.className}>  {this.props.name}</i>
		);
	}
});

var Photo = React.createClass({
	render: function () {
		return (
			<img src={this.props.src} alt="aaa" className="am-img-thumbnail am-radius am-center"/>
		);
	}
});

var Cv = React.createClass({
	render: function () {
		return (
			<div className="main">
			  <div className="am-u-sm-7 left">
			  	<ItemTitle className="am-icon-home am-icon-sm" name="技能"/>
			  </div>
			  <div className="am-u-sm-5 right">
			  	<Photo src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"/>
			  </div>
			</div>
		);
	}
});

ReactDOM.render(
	<Cv /> ,
	document.getElementById('cv')
);