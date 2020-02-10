import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamVideos, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Typography, Row, Col, Button } from 'antd';
import './teamTest.css';
import UserVideosCard from "../UserVideosCard";

const { Header, Content } = Layout;

const PromptVideoList = (props) => {
	let { team_id } = useParams();

	useEffect(() => {
		props.fetchTeamVideos(team_id)
		console.log("Comp Videos", props.teamVideos)
	}, [team_id]);

	if (!props.teamVideos) {
		return <h2>Loading...</h2>;
	} else {

		return (
			<Content>
				<p>Prompts({props.teamVideos.length})</p>
				<Row gutter={[16, 16]}>
					{/* Add a prompt button */}
					<Col span={2}>
						<Button type="primary" shape="circle" icon="plus-circle" className="add-prompt" />
					</Col>
					
					{/* Display team prompts array */}
					<Col span={2}>
						{props.teamVideos.map(promptVideos => (
							<div key={promptVideos.id}>
								<div className="prompt-container">
									<h3>{promptVideos.question}</h3>
									<p>{promptVideos.description}</p>
								</div>
								
								{/* Display videos array for a specific prompt */}
								<div className="videos-container">
									{promptVideos.videos.map(data => <UserVideosCard key={data.video_id} data={data} />)}
								</div>
							</div>
						))}
					</Col>
				</Row>
			</Content>
		)
	}
}

const mapStateToProps = (state) => ({
	teamVideos: state.Team.teamVideos
});

const mapActionsToProps = {
	fetchTeamVideos,
	setError,
	clearError
};

export default connect(mapStateToProps, mapActionsToProps)(PromptVideoList);