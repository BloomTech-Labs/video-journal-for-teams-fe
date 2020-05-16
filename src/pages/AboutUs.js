 import React from 'react';
 import { Card } from 'antd';
 import { useHistory, Link } from "react-router-dom";
 import { Button } from 'antd';
 const AboutUs = () => {
	 let history = useHistory();
     return(
        <div className="header">
			<nav className="bar">
				<div className="title">
					<h1 className="userDashHeaderFont" >Team&nbsp;Reels</h1>
				</div>
					<div className="links">
					<Link to="/login">Sign in</Link>
					<Link to="/about">About us</Link>
					
					<div className="navStart">
						<Button size="medium"
							className="adding-button"
							onClick={
								(e) => {
									e.preventDefault();
									history.push("/register");
								}
							}>
							GET STARTED 
						</Button>
					</div>
				</div>
			</nav>
			<div className="cards">
				<h1>Version Two Team</h1>
				<Card className="dev">
					<h2>Kyla Oyamot</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012QNQMEMS-1eea077dbe2f-512" alt="Kyla"/>
					<h3>Project Lead</h3>
					<h3>Project Team Lead</h3>
				</Card>
				<Card className="dev">
					<h2>Scott Harris</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012JHXT4HY-81c4a9984527-512" alt="Scott"/>
					<h3>iOS Developer</h3>
					<h3></h3>
				</Card>
				<Card className="dev">
					<h2>Beth Wingate</h2>
					<img src ="https://ca.slack-edge.com/ESZCHB482-W012JHY8NH0-15c9a5fe1341-512" alt="Beth"/>
					<h3>iOS Developer</h3>
					<h3></h3>
				</Card>
				<Card className="dev">
					<h2>Chris Huskey</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012H6PJ70V-6b3f17345534-512" alt="CHuskey"/>
					<h3>Data Science Developer</h3>
					<h3></h3>
				</Card>
				<Card className="dev">
					<h2>CJ Ricciardi</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W0123RS7KGF-4c8af9817b4a-512" alt="CJ"/>
					<h3>Data Science Developer</h3>
					<h3></h3>
				</Card>
				<Card className="dev">
					<h2>Tatiana Portsova</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012BRSL3SS-5895768245df-512" alt="Tatiana"/>
					<h3>Data Science Developer</h3>
					<h3></h3>
				</Card>
				<Card className="dev">
					<h2>Christopher Howell</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012H6RLJ2Z-517abb0997a9-512" alt="CHowell"/>
					<h3>Data Science Developer</h3>
					<h3></h3>
				</Card>
				<Card className="dev">
					<h2>Jacob Clark</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012BRS805C-676ff53f32a6-512" alt="Jacob"/>
					<h3>Full Stack Web Developer</h3>
					<h3></h3>
				</Card>
				<Card className="dev">
					<h2>Chris Giroux</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012QNWCDL4-2a297fde65d3-512" alt="CGiroux"/>
					<h3>Full Stack Web Developer</h3>
					<h3></h3>
				</Card>
				<Card className="dev">
					<h2>Naomi R Torres</h2>
					<img src ="https://ca.slack-edge.com/T4JUEB3ME-URDAV2AV7-a4e719e888aa-512" alt="Naomi"/>
					<h3>Web Developer</h3>
					<h3>Full Stack Web Development student at Lambda School</h3>
				</Card>
				<Card className="dev">
					<h2>Walter Futch</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012JHV1XAN-0e5f0eeb6e7e-512" alt="Walter"/>
					<h3>Full Stack Web Developer</h3>
					<h3></h3>
				</Card>
				
				<Card className="dev">
					<h2>Gregory Hawman</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W0123RSAAGP-80dea8dd5def-512" alt="Gregory"/>
					<h3>Full Stack Web Developer</h3>
					<h3></h3>
				</Card>
				
			</div>
			
			 {/* <h1>Version One Team</h1>
				<div className="Cards">
					<Card bordered className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM20RB9-672e81ad9979-512" />}>
						<h3>Darrin Lowery</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars0.githubusercontent.com/u/18246524?s=460&v=4" />}>
						<h3>Kerri-Ann Bates</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars2.githubusercontent.com/u/54912919?s=460&v=4" />}>
						<h3>Sam Allen</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars1.githubusercontent.com/u/8367070?s=460&v=4" />}>
						<h3>Sofia Levin</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://avatars2.githubusercontent.com/u/13441400?s=460&v=4" />}>
						<h3>Michael Nunes</h3><Tag>Web</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UHV65B6UA-1eea077dbe2f-512" />}>
						<h3>Kyla Oyamot</h3><Tag>UX</Tag>
					</Card>
					<Card className="person" hoverable cover={<img src="https://ca.slack-edge.com/T4JUEB3ME-UJB5Y3VS4-52dc043b8f1e-512" />}>
						<h3>Marcus Jones</h3><Tag>Team Lead</Tag>
					</Card>
					<Card className="person" hoverable>
						<h3>Github</h3>
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe" target="_blank">Frontend</a>
						<br />
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-be" target="_blank">Backend</a>
						<br /> 
						<a href="https://alpacavid-api-doc.netlify.com/" target="_blank">API Documentation</a>
						<Divider />
						<h3>Alpaca Drawing</h3>
						<p>DeLenn Lowery</p>
					</Card>
				</div> */}
		</div>
    )
}
 

export default AboutUs;