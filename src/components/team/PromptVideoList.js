import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamVideos, createPrompt, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Typography, Row, Col, Modal, Form, Input, Button } from 'antd';
import './teamTest.css';
import UserVideosCard from "../UserVideosCard";

const { Header, Content } = Layout;

const PromptVideoList = (props) => {
	const [showModal, setShowModal] = useState(false)
	const [prompt, setPrompt] = useState({ question: "", description: "" })

	let { team_id } = useParams();
	let history = useHistory();

	useEffect(() => {
		props.fetchTeamVideos(team_id)
	}, [team_id, props.newPrompt]);

	const toggleModal = () => {
		setShowModal(!showModal)
	}

	const handleOk = (e) => {
		toggleModal();
		props.createPrompt(prompt, team_id)
	}

	const handleInput = (e) => {
		setPrompt({ ...prompt, [e.target.name]: e.target.value });
	};

	if (!props.teamVideos) {
		return <h2>Loading...</h2>;
	} else {

		return (
			<Content>
				<p>Prompts({props.teamVideos.length})</p>
				<Row gutter={[16, 16]}>
					{/* Add a prompt button */}
					<Col span={2}>
						<Button onClick={toggleModal} type="primary" shape="circle" icon="plus-circle" className="add-prompt" />
						<Modal
							title="Add New Prompt"
							visible={showModal}
							onOk={handleOk}
							onCancel={toggleModal}
							okText="Submit"
						>
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


						{props.teamVideos.map(promptVideos => (
							<div key={promptVideos.id}>
								<div className="prompt-container">
									<h3>{promptVideos.question}</h3>
									<p>{promptVideos.description}</p>
								</div>
								<Button onClick={() => history.push("/videos")} type="primary" shape="circle" icon="plus-circle" className="add-prompt" />
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
	teamVideos: state.Team.teamVideos,
	newPrompt: state.Team.newPrompt
});

const mapActionsToProps = {
	fetchTeamVideos,
	createPrompt,
	setError,
	clearError
};

export default connect(mapStateToProps, mapActionsToProps)(PromptVideoList);