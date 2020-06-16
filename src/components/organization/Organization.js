// import React, { useState, useEffect } from 'react';
// import {useHistory} from 'react-router-dom';
// import { Modal, Button, Form, Input, Card, Icon } from 'antd';
// import {connect} from "react-redux";
// import { createUserOrganization} from "../../redux/actions/userActions";

// const Organization = ({createUserOrganization}) => {
//     const [organization, setOrganization] = useState({});
//     const [showModal, setShowModal] = useState(false);
//     const history = useHistory();

//     const handleOk = () => {
//         createUserOrganization(organization, history)
//         toggleModal();

//     }

//     const toggleModal = () => {
//             setShowModal(!showModal)
//         }
//         const handleInput = (e) => {
//             setOrganization({ ...organization, [e.target.name]: e.target.value });
//         };

//     return (
//         <div>
//             <Button className="add-org" onClick={toggleModal}>
// 					<Card>
// 						<div>
// 							<Icon type="plus-circle" theme="filled" />
// 						</div>
// 						<p>Create an organization</p>
// 					</Card>
// 			</Button>

// 			   <Modal
// 					title="Create New Organization"
// 					visible={showModal}
// 					onOk={handleOk}
// 					onCancel={toggleModal}
// 					okText="Create Organization"
// 				>
// 					<Form layout="vertical">
// 						<Form.Item label="Organization Name">
// 							<Input onChange={handleInput} name="name" />
// 						</Form.Item>

// 					</Form>
// 				</Modal>
//         </div>

//     )
// }

// const mapActionsToProps = {
//     createUserOrganization
// };

// export default connect(null, mapActionsToProps)(Organization);

import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Form, Input, Card, Icon } from "antd";
import { connect, useSelector } from "react-redux";
import { createUserOrganization } from "../../redux/actions/userActions";
const Organization = ({ createUserOrganization }) => {
	const [organization, setOrganization] = useState({});
	const [showModal, setShowModal] = useState(false);
	const history = useHistory();
	const state = useSelector((state) => state);

	const handleOk = () => {
		createUserOrganization(organization, history, state.User.userId);
		toggleModal();
	};
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	const handleInput = (e) => {
		setOrganization({ ...organization, [e.target.name]: e.target.value });
	};
	return (
		<div>
			<Button
				type="primary"
				style={{
					textAlign: "center",
					width: 200,
					backgroundColor: "#FF7F50",
					color: "white",
					border: "1px solid white",
				}}
				onClick={toggleModal}>
				Create a New Organization
			</Button>
			<Modal
				title="Create New Organization"
				visible={showModal}
				onOk={handleOk}
				onCancel={toggleModal}
				okText="Create Organization">
				<Form layout="vertical">
					<Form.Item label="Organization Name">
						<Input onChange={handleInput} name="name" />
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};
const mapActionsToProps = {
	createUserOrganization,
};
export default connect(null, mapActionsToProps)(Organization);
