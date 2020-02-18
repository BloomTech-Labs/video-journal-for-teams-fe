import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamVideos, createPrompt, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Typography, Row, Col, Modal, Form, Input, Button } from "antd";
import "./teamTest.css";
import UserVideosCard from "../UserVideosCard";

const { Header, Content } = Layout;

const PromptVideoList = (props) => {
	const [showModal, setShowModal] = useState(false);
	const [prompt, setPrompt] = useState({ question: "", description: "" });

	let { team_id } = useParams();
	let history = useHistory();

	useEffect(() => {
		props.fetchTeamVideos(team_id);
	}, [team_id, props.newPrompt]);

	const toggleModal = () => {
		setShowModal(!showModal);
	};

	const handleOk = (e) => {
		toggleModal();
		props.createPrompt(prompt, team_id);
	};

	const handleInput = (e) => {
		setPrompt({ ...prompt, [e.target.name]: e.target.value });
	};

	if (!props.teamPromptsAndVideos) {
		return <h2>Loading...</h2>;
	} else {
		return (
			<Content>
				<p>Prompts({props.teamPromptsAndVideos.length})</p>
				<Row gutter={[16, 16]}>
					{/* Add a prompt button */}
					<Col span={2}>
						{props.userRole === 2 ? (<Button onClick={toggleModal} type="primary" shape="circle" icon="plus-circle" className="add-prompt" />) :
							(<Button style={{ "display": "none" }} />)}
						<Modal title="Add New Prompt" visible={showModal} onOk={handleOk} onCancel={toggleModal} okText="Submit">
							<Form>
								<Form.Item label="Question">
									<Input onChange={handleInput} name="question" placeholder="required" />
								</Form.Item>
								<Form.Item label="Description">
									<Input onChange={handleInput} name="description" placeholder="optional" />
								</Form.Item>
							</Form>
						</Modal>
					</Col>

					{/* Display team prompts array */}
					<Col span={2}>
						{props.teamPromptsAndVideos.map((prompts) => (
							<div key={prompts.id}>
								<div className="prompt-container">
									<h3>{prompts.question}</h3>
									<p>{prompts.description}</p>
								</div>
								<Button
									onClick={() => history.push(`/teams/${props.teamId}/videos/post`)}
									type="primary"
									shape="circle"
									icon="plus-circle"
									className="add-prompt"
								/>
								{/* Display videos array for a specific prompt */}
								<div className="videos-container">
									{prompts.videos.map((video) => (
										<UserVideosCard key={video.id} data={video} />
									))}
								</div>
							</div>
						))}
					</Col>
				</Row>
			</Content>
		);
	}
};

const mapStateToProps = (state) => ({
	teamPromptsAndVideos: state.Team.teamPromptsAndVideos,
	newPrompt: state.Team.newPrompt,
	teamId: state.Team.team.id,
});

const mapActionsToProps = {
	fetchTeamVideos,
	createPrompt,
	setError,
	clearError,
};

export default connect(mapStateToProps, mapActionsToProps)(PromptVideoList);
