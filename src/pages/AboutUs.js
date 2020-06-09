 import React from 'react';
 import { Card } from 'antd';
 import { useHistory, Link } from "react-router-dom";
 import { Button } from 'antd';
 import teamReel from '../imgs/TeamReel.png';

 const AboutUs = () => {
	 let history = useHistory();
     return(
        <div className="header">
			<nav className="bar">
				<div className="title">
					<img src={teamReel} alt="team reel logo"/>
				</div>
					<div className="links">
					<Link to="/">Home</Link>
					<Link to="/user-dashboard">Sign in</Link>
					
					<div className="navStart">
						<Button size="medium"
							className="adding-button"
							onClick={
								(e) => {
									e.preventDefault();
									history.push("/user-dashboard");
								}
							}>
							GET STARTED 
						</Button>
					</div>
				</div>
			</nav>
			<div className="cards">
				<h1 className="version">Version Two Team</h1>
				<Card className="dev">
					<h2>Scott Harris</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012JHXT4HY-81c4a9984527-512" alt="Scott"/>
					<h3>iOS Developer</h3>	
				</Card>
				<Card className="dev">
					<h2>Beth Wingate</h2>
					<img src ="https://ca.slack-edge.com/ESZCHB482-W012JHY8NH0-15c9a5fe1341-512" alt="Beth"/>
					<h3>iOS Developer</h3>
				</Card>
				<Card className="dev">
					<h2>Chris Huskey</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012H6PJ70V-6b3f17345534-512" alt="CHuskey"/>
					<h3>Data Science Developer</h3>
				</Card>
				<Card className="dev">
					<h2>CJ Ricciardi</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W0123RS7KGF-4c8af9817b4a-512" alt="CJ"/>
					<h3>Data Science Developer</h3>
				</Card>
				<Card className="dev">
					<h2>Tatiana Portsova</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012BRSL3SS-5895768245df-512" alt="Tatiana"/>
					<h3>Data Science Developer</h3>
				</Card>
				<Card className="dev">
					<h2>Christopher Howell</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012H6RLJ2Z-517abb0997a9-512" alt="CHowell"/>
					<h3>Data Science Developer</h3>
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
				</Card>
				<Card className="dev">
					<h2>Naomi R Torres</h2>
					<img src ="https://ca.slack-edge.com/T4JUEB3ME-URDAV2AV7-a4e719e888aa-512" alt="Naomi"/>
					<h3>Full Stack Web Developer</h3>
				</Card>
				<Card className="dev">
					<h2>Kyla Oyamot</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012QNQMEMS-1eea077dbe2f-512" alt="Kyla"/>
					<h3>Project Lead</h3>
					<h3>UX Designer</h3>
				</Card>
			
			
			  <h1 className="version">Version One Team</h1>
					<Card className="dev">
						<h2>Darrin Lowery</h2>
						<img src="https://ca.slack-edge.com/T4JUEB3ME-UMQM20RB9-672e81ad9979-512" alt="Darrin"/>
						<h3>Full Stack Web Developer</h3>
					</Card>
					<Card className="dev">
						<h2>Kerri-Ann Bates</h2>
						<img src="https://avatars0.githubusercontent.com/u/18246524?s=460&v=4" alt="Kerri"/>
						<h3>Full Stack Web Developer</h3>
					</Card>
					<Card className="dev">
						<h3>Sam Allen</h3>
						<img src="https://avatars2.githubusercontent.com/u/54912919?s=460&v=4" alt="Sam"/>
						<h3>Full Stack Web Developer</h3>
					</Card>
					<Card className="dev">
						<h3>Sofia Levin</h3>
						<img src="https://avatars1.githubusercontent.com/u/8367070?s=460&v=4" alt="Sofia"/>
						<h3>Full Stack Web Developer</h3>
					</Card>
					<Card className="dev">
						<h3>Michael Nunes</h3>
						<img src="https://avatars2.githubusercontent.com/u/13441400?s=460&v=4" alt="Michael"/>
						<h3>Full Stack Web Developer</h3>
					</Card>
					<Card className="dev">
						<h3>Kyla Oyamot</h3>
						<img src="https://ca.slack-edge.com/T4JUEB3ME-UHV65B6UA-1eea077dbe2f-512" alt="Kyla"/>
						<h3>UX Design</h3>
					</Card>
					<Card className="dev">
						<h3>Marcus Jones</h3>
						<img src="https://ca.slack-edge.com/T4JUEB3ME-UJB5Y3VS4-52dc043b8f1e-512" alt="Marcus"/>
						<h3>Team Lead</h3>
					</Card>
					{/* <Card className="person" hoverable>
						<h3>Github</h3>
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-fe" target="_blank">Frontend</a>
						<br />
						<a href="https://github.com/Lambda-School-Labs/video-journal-for-teams-be" target="_blank">Backend</a>
						<br /> 
						<a href="https://alpacavid-api-doc.netlify.com/" target="_blank">API Documentation</a>
						<Divider />
						<h3>Alpaca Drawing</h3>
						<p>DeLenn Lowery</p>
					</Card> */}
			</div>	
		</div>
    )
}
 

export default AboutUs;