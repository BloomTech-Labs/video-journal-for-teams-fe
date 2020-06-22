import React, { useState, useEffect } from "react";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import { Modal, Button } from "antd";

export default function SingleVidFeedback({ videoId }) {
	const [data, setData] = useState();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const showModal = () => {
		setOpen(!open);
	};

	const handleCancel = () => {
		setOpen(!open);
	};

	useEffect(() => {
		AxiosWithAuth()
			.get(`/v2/users/singlevid/${videoId}`)
			.then((res) => setData(res.data))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div>
			<Button
				type="secondary"
				style={{
					background: "#6954EA",
					color: "white",
					fontSize: "1rem",
					textAlign: "left",
					border: "none",
				}}
				onClick={handleOpen}>
				See Video Results
			</Button>

			<Modal
				title="Performance Results"
				visible={open}
				onOk={showModal}
				onCancel={handleCancel}
				okText="Ok"
				okButtonProps={{ style: { backgroundColor: "#6954EA", color: "white", border: "none" } }}>
				{data && data.video && (
					<div>
						<h2>{`Overall Performance: ${Number(data.video.overall_performance).toFixed(2)}/5`}</h2>
						<h2>{`Delivery and Presentation: ${Number(data.video.delivery_and_presentation).toFixed(2)}/5`}</h2>
						<h2>{`Response Quality: ${Number(data.video.response_quality).toFixed(2)}/5`}</h2>
						<h2>{`Audio Quality: ${Number(data.video.audio_quality).toFixed(2)}/5`}</h2>
						<h2>{`Visual Environment: ${Number(data.video.visual_environment).toFixed(2)}/5`}</h2>
						<h2>{`Attitude: ${Number(data.video.attitude).toFixed(2)}/5`}</h2>
					</div>
				)}
			</Modal>
		</div>
	);
}
