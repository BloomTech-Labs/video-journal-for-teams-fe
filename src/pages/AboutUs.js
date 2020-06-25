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
				<h1 className="version">Version Three Team - Labs 24</h1>
				<Card className="dev">
					<h2>Scott Harris</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012JHXT4HY-81c4a9984527-512" alt="Scott"/>
					<h3>iOS Developer</h3>	
				</Card>
				<Card className="dev">
					<h2>Beth Wingate</h2>
					<img src ="https://ca.slack-edge.com/ESZCHB482-W012JHY8NH0-2f09d30b1297-512" alt="Beth"/>
					<h3>iOS Developer</h3>
				</Card>
				<Card className="dev">
					<h2>Chris Huskey</h2>
					<img src="https://ca.slack-edge.com/ESZCHB482-W012H6PJ70V-6b3f17345534-512" alt="CHuskey"/>
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
			
			
			  <h1 className="version">Version Two Team - Labs 22</h1>
					<Card className="dev">
						<h2>Prem Puttegowda</h2>
						<img src="https://avatars1.githubusercontent.com/u/48593048?s=400&u=20da423b85890989874a822ecfd9911fe8567994&v=4"/>
						<h3>Full Stack Web Developer</h3>
					</Card>
					<Card className="dev">
						<h2>Isabella Guo</h2>
						<img src="https://avatars0.githubusercontent.com/u/56899955?s=400&u=f9ee3c869c52e3b73cf0c804622e180484531fb2&v=4"/>
						<h3>Full Stack Web Developer</h3>
					</Card>
					<Card className="dev">
						<h2>Chris Oakes</h2>
						<img src="https://camo.githubusercontent.com/a767098ab5aee5fd51b0f2e7a1cfd4118921de10/68747470733a2f2f6d656469612d657870312e6c6963646e2e636f6d2f646d732f696d6167652f4334453033415148485a30434b576a497658412f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3230305f3230302f303f653d3135393336343830303026763d6265746126743d46644f7477424e4e755f56667349527935545663375144424835504136582d443161525a38544738474a38"/>
						<h3>Full Stack Web Developer</h3>
					</Card>
					<Card className="dev">
						<h2>Johnathan Perkins</h2>
						<img src="https://media-exp1.licdn.com/dms/image/C4D03AQH1akJC0YapCQ/profile-displayphoto-shrink_400_400/0?e=1597276800&v=beta&t=iBreMqxhQTuea1kXBArfbmCGlwZvp0nF3NzhiljyvB8"/>
						<h3>UX Designer</h3>
					</Card>
					<Card className="dev">
						<h2>Jessica Morrison</h2>
						<img src="https://avatars1.githubusercontent.com/u/23093709?s=400&u=98a18ece02a63ec3eb008c60a1185a97d742b394&v=4"/>
						<h3>UX Designer</h3>
					</Card>


			  <h1 className="version">Version One Team - Labs 20</h1>
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
