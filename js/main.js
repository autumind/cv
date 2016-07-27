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
			<div>
				<i className={this.props.className}>&nbsp;&nbsp;{this.props.name}</i>
				<hr/>
			</div>
		);
	}
});

var Job = React.createClass({
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

var Edu = React.createClass({
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

var Skill = React.createClass({
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

var Strength = React.createClass({
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

var Contact = React.createClass({
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

var Photo = React.createClass({
	render: function () {
		return (
			<div className="photoOut">
				<img src={this.props.src} alt="myphoto" className="photoIn am-center"/>
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
					<ItemTitle className="am-icon-institution" name="EDUCATION"/>
				</div>
				<div className="am-u-sm-5 right">
				  	<Photo src="http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"/>
					<ItemTitle className="am-icon-institution" name="TECHNICAL SKILLS"/>
					<ItemTitle className="am-icon-institution" name="STRENGTHS"/>
					<ItemTitle className="am-icon-institution" name="CONTACT"/>
				</div>
			</div>
		);
	}
});

ReactDOM.render(
	<Cv /> ,
	document.getElementById('cv')
);
