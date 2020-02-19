import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Row, Col, Icon, Avatar } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;


const UserVideosCard = (props) => {
	const data = props.data;
	return (
		<Card className="video-card"
			cover={
				<img
					src={data.thumbnail}
				/>
			}
			actions={[
				<Icon type="setting" key="setting" />,
				<Icon type="edit" key="edit" />,
				<Icon type="ellipsis" key="ellipsis" />,
			]}
		>
			<Meta style={{ textAlign: "left" }}
				title={data.title}
				description={data.description && <span className="small">{data.description}{data.description}{data.description}</span>}
			/>
		</Card>
		// <Card className="video-card" size="small" onClick={() => props.history.push(`/user-dashboard/video/${data.id}`)}>
		// 	<Row className="video-card-inner" gutter={[8, 8]}>
		// 		<Col span={8}>
		// 			<img src={data.thumbnail} height={100} width={100} />
		// 		</Col>
		// 		<Col span={3}>{/* Space only */}</Col>
		// 		<Col span={8} style={{ textAlign: "left" }}>
		// 			<p>{data.title}</p>
		// 			{data.description && <p className="small">{data.description}</p>}
		// 			<p className="small">{data.created_at}</p>
		// 		</Col>
		// 	</Row>
		// </Card>
		// <Layout>
		// 		<Col span={12} style={{ textAlign: "left" }}>
		// 			<p>Feedbacks go here?</p>
		// 		</Col>
		// 	</Row>
		// </Layout>
	);
};

export default withRouter(UserVideosCard);
