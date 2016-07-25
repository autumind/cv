var Me = React.createClass({
	render: function () {
		return (
			<div className="me">
				<h1 className="am-article-title me-name">{this.props.name}</h1>
				<p className="am-article-meta me-title">{this.props.title}</p>
				<p className="me-desc">{this.props.desc}</p>
			</div>
		);
	}
});

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
			<div className="photoOut">
				<img src={this.props.src} alt="aaa" className="photoIn am-center"/>
			</div>
		);
	}
});

var Cv = React.createClass({
	render: function () {
		return (
			<div className="main">
			  <div className="am-u-sm-7 left">
				<Me name={profile.name} title={profile.title} desc={profile.desc}/>
				<ItemTitle className="am-icon-institution" name="JOB EXPERIENCE"/>
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