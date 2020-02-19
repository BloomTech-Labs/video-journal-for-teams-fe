import React, { useState } from 'react';

function ConfirmationModal(props) {
	const [visible, setVisible] = useState(false);

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
