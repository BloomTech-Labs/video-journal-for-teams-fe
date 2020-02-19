import React, { useState } from 'react';
import { Modal, Button } from 'antd';

function ConfirmationModal(props) {
	const { memberUpdated } = props;
	const [visible, setVisible] = useState(memberUpdated);

	const showModal = () => {
		setVisible(true);
	};

	const handleOk = e => {
		console.log(e);
		setVisible(false);
	};

	return (
		<>
			<Modal
				title="Basic Modal"
				visible={visible}
				onOk={handleOk}
			>
				<p>Some content....</p>
			</Modal>
		</>
	)
}

export default ConfirmationModal;
