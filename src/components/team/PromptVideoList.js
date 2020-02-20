import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTeamVideos, createPrompt, setError, clearError } from "../../redux/actions/teamActions";
import { Layout, Card, Row, Col, Modal, Form, Input, Button, Collapse } from "antd";
import "./teamTest.css";
import PromptCard from "./PromptCard.js";

const { Header, Content } = Layout;
const { Panel } = Collapse;

const PromptVideoList = (props) => {
	// #region CLICK UNCOLLAPSE ICON TO SHOW COMPONENT LOGIC
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
	//#endregion CLICK TO UNCOLLAPSE COMPONENT LOGIC

	if (!props.teamPromptsAndVideos) {
		return <h2>Loading...</h2>;
	} else {
		return (
			<Content>
				<h1>Prompts({props.teamPromptsAndVideos.length})</h1>
				{props.userRole === 1 ? null : (
					<Button onClick={toggleModal} type="primary" shape="round" icon="plus" className="add-prompt">
						New Prompt
					</Button>
				)}
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
				{props.teamPromptsAndVideos.map((prompt) => (
					<PromptCard key={prompt.id} data={prompt} />
				))}
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
