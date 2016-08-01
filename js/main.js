// 我的信息
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

// 项目标题
var ItemTitle = React.createClass({
	render: function () {
		return (
			<div className="m-cv-m-b-10">
				<i className={this.props.className}>&nbsp;&nbsp;{this.props.name}</i>
				<hr/>
			</div>
		);
	}
});

// 工作经验组件
var Job = React.createClass({
	render: function () {
		return (
			<div>
				<ItemTitle className="am-icon-institution" name="JOB EXPERIENCE"/>
				<div className="am-g am-g-collapse">
					<div className="am-u-sm-2 duration">
					    <div className="am-text-truncate m-cv-m-b-e-7">JULY 2013</div>
					    <div className="am-text-truncate">PRESENT</div>
					</div>
					<div className="am-u-sm-10 content">
					    <h4 className="am-article-title item-name">Company1</h4>
					    <p className="item-title">Senior Developer</p>
					    <p className="item-desc">Full Stack</p>
					</div>
				</div>
			</div>
		);
		//  am-g-collapse
	}
});

// 教育组件 
var Edu = React.createClass({
	render: function () {
		return (
			<div>
				<ItemTitle className="am-icon-institution" name="EDUCATION"/>
				<div className="am-g am-g-collapse">
					<div className="am-u-sm-2 duration">
					    <div className="am-text-truncate m-cv-m-b-e-7">SEP 2008</div>
					    <div className="am-text-truncate">JUN 2012</div>
					</div>
					<div className="am-u-sm-10 content">
					    <h4 className="am-article-title item-name">Nanjing Agricultural University</h4>
					    <p className="item-title p-cv-m-b-5">Computer Sience</p>
					    <p className="item-desc">Nanjing, Jiangsu, China</p>
					</div>
				</div>
			</div>
		);
	}
});

// 技能组件
var Skill = React.createClass({
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

// 特长组件
var Strength = React.createClass({
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

// 联系方式组件
var Contact = React.createClass({
	render: function () {
		return (
			<div>
			</div>
		);
	}
});

// 照片组件
var Photo = React.createClass({
	render: function () {
		return (
			<div className="photoOut">
				<img src={this.props.src} alt="myphoto" className="photoIn am-center"/>
			</div>
		);
	}
});

// 简历组件
var Cv = React.createClass({
	render: function () {
		return (
			<div className="main">
				<div className="am-u-sm-7 left">
					<Me name={profile.name} title={profile.title} desc={profile.desc}/>
					<Job />
					{  /*<ItemTitle className="am-icon-institution" name="JOB EXPERIENCE"/>*/ }
					<Edu />
					{  /*<ItemTitle className="am-icon-institution" name="EDUCATION"/>*/ }
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

// 渲染页面
ReactDOM.render(
	<Cv /> ,
	document.getElementById('cv')
);
