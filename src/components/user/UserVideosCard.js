import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Row, Col, Icon, Avatar } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;


const UserVideosCard = (props) => {
	const data = props.data;
	return (
		<Card className="video-card"
			cover={<img src={data.thumbnail}/>}
			actions={[
				<Icon type="setting" key="setting" />,
				<Icon type="edit" key="edit" />,
				<Icon type="ellipsis" key="ellipsis" />,
			]}
		>
			<Meta style={{ textAlign: "left" }}
				title={data.title}
				description={data.description && <span className="small">{data.description}</span>}
			/>
		</Card>
	);
};

export default withRouter(UserVideosCard);
