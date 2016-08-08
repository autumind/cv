(function pc(isPc) {
	if (!isPc) {
		return;
	}
	// 我的信息
	var Me = React.createClass({
		render: function () {
			return (
				<div className="me">
					<h1 className="am-article-title me-name">{this.props.name}</h1>
					<p className={"am-article-meta me-title me-title-" + lang}>{this.props.title}</p>
					<p dangerouslySetInnerHTML={{__html: this.props.desc}}>
					</p>
					{this.props.quote != null && this.props.quote.length > 0 ? 
						<blockquote>
							<p className="quote">{this.props.quote}</p>
						</blockquote>
						: ""
					}
				</div>
			);
		}
	});
	
	// 项目标题
	var ItemTitle = React.createClass({
		render: function () {
			return (
				<div className="m-cv-m-b-10">
					<i className={"am-icon-institution " + (lang == 'en' ? '' : 'ch')}>&nbsp;&nbsp;{this.props.name}</i>
				</div>
			);
		}
	});
	
	// 工作经验组件
	var Job = React.createClass({
		render: function () {
			return (
				<div>
					<ItemTitle name={lang == 'en' ? 'JOB EXPERIENCE' : '工作经验'}/>
					<hr/>
					{
						profile.job.map(function (job) {
							return (
								<div className="am-g am-g-collapse am-margin-top">
									<div className="am-u-sm-2 duration">
									    <div className="am-text-truncate am-monospace m-cv-m-b-e-7 m-cv-m-t-2">{job.start}</div>
									    <div className="am-text-truncate am-monospace">{job.end}</div>
									</div>
									<div className="am-u-sm-10 content">
									    <h4 className="am-article-title item-name">{job.company}</h4>
									    <p className="item-title">{job.position}</p>
									    <p className="item-desc">{job.content}</p>
									</div>
								</div>
							)
						})
					}
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
					<ItemTitle className="am-margin-top" name={lang == 'en' ? 'EDUCATION' : '教育经历'}/>
					<hr/>
					{
						profile.edu.map(function (edu) {
							return (
								<div className="am-g am-g-collapse am-margin-top">
									<div className="am-u-sm-2 duration">
									    <div className="am-text-truncate am-monospace m-cv-m-b-e-7 m-cv-m-t-2">{edu.start}</div>
									    <div className="am-text-truncate am-monospace">{edu.end}</div>
									</div>
									<div className="am-u-sm-10 content">
									    <h4 className="am-article-title item-name">{edu.school}</h4>
									    <p className={"item-title " + (lang == "en" ? "p-cv-m-b-7" : "p-cv-m-b-9")}>{edu.major}, {edu.degree}</p>
									    <p className="item-desc fix-desc">{edu.where}</p>
									    <p className="item-desc">{edu.desc}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			);
		}
	});
	
	// 技能组件
	var Skill = React.createClass({
		render: function () {
			return (
				<div>
					<ItemTitle name={lang == 'en' ? 'TECHNICAL SKILLS' : '个人技能'}/>
					<dl>
						{
							profile.skill.map(function (skill) {
								return (
									<div>
										<dt className="skill-set-name">{skill.set_name}</dt>
										{
											skill.set_skills.map(function (s) {
												if (skill.set_type != 'l') {
													return (
														<dd>
															<div className="am-g am-g-collapse">
																<div className="am-u-sm-4 am-text-truncate skill-name">
																	{s.name}
																</div>
																<div className="am-u-sm-8 m-cv-m-b-10">
																	<progress value={s.percent} max="100"></progress>
																</div>
															</div>
														</dd>
													);
												} else {
													return (
														<dd>
															<div className="am-g am-g-collapse">
																<div className="am-u-sm-4 am-text-truncate skill-name">
																	<dfn title={s.level}>{s.name}</dfn>
																</div>
																<div className="am-u-sm-8 m-cv-m-b-10">
																	<progress value={s.percent} max="100"></progress>
																</div>
															</div>
														</dd>
													);
												}
											})
										}
										<hr className="fix-desc"/>
									</div>
								)
							})
						}
					</dl>
				</div>
			);
		}
	});
	
	// 特长组件
	var Strength = React.createClass({
		render: function () {
			return (
				<div>
					<ItemTitle name={lang == 'en' ? 'STRENGTHS' : '特长&爱好'}/>
					<div className="strength am-margin-vertical-sm am-margin-left-lg">
						{
							profile.strength.map(function (strength) {
								return <div>+ {strength}</div>
							})
						}
					</div>
				</div>
			);
		}
	});
	
	// 联系方式组件
	var Contact = React.createClass({
		render: function () {
			return (
				<div>
					<ItemTitle name={lang == 'en' ? 'CONTACT' : '联系方式'}/>
					<div className="p-cv-m-t-10">
						{
							profile.contact.map(function (contact) {
								return (
									<div className="am-g am-g-collapse">
										<div className="am-u-sm-3 contact-type">
											<span className={'am-icon-' + contact.icon + ' am-show-sm-only'}></span>
											<span className="am-hide-sm-only">{contact.name}:</span>
										</div>
										<div className="am-u-sm-9 m-cv-m-b-10 contact_content">
											{contact.siteOrNum}
										</div>
									</div>
								)
							})
						}
					</div>
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
	
	// 社交账号
	var Social = React.createClass({
		render: function () {
			return (
				<div className="am-center">
					<ul className={"am-margin-bottom "+ "am-avg-sm-" + (profile.social.length - 2) + " am-avg-md-" + profile.social.length + " am-avg-lg-" + profile.social.length + " social-width"}>
						{
							profile.social.map(function (social) {
								return (
									<li className="am-text-center am-text-lg">
										<a href={social.siteOrNum} alt={social.name} className={"font-color-grey am-icon-" + social.icon}></a>
									</li>
								)
							})
						}
					</ul>
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
						<Me name={profile.name} title={profile.title} desc={profile.desc} quote={profile.quote}/>
						<Job />
						{  /*<ItemTitle className="am-icon-institution" name="JOB EXPERIENCE"/>*/ }
						<Edu />
						{  /*<ItemTitle className="am-icon-institution" name="EDUCATION"/>*/ }
					</div>
					<div className="am-u-sm-5 right">
					  	<Photo src={base64_photo}/>
					  	{ /*<Photo src={"http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/1000/h/1000/q/80"}/>*/ }
					  	<Social />
						<Skill />
						{ /*<ItemTitle className="am-icon-institution" name="TECHNICAL SKILLS"/>*/ }
						<Strength />
						{ /*<ItemTitle className="am-icon-institution" name="STRENGTHS"/>*/ }
						<Contact />
						{ /*<ItemTitle className="am-icon-institution" name="CONTACT"/>*/ }
						{
	//					<a href="http://stackoverflow.com/users/5960800/jpg?theme=default">
	//						<img src="http://stackoverflow.com/users/flair/5960800.png" width="208" height="58" alt="profile for JPG at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for JPG at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/>
	//					</a>
	
	//					<div id="bmap"></div>
	//					<div id="uyan_frame"></div>
	//					<script type="text/javascript" src="http://v2.uyan.cc/code/uyan.js?uid=2065592"></script>
						}
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

}(true));
