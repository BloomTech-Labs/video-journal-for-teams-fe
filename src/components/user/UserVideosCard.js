import React from "react";
import { withRouter } from "react-router-dom";
import { Card, Row, Col, Icon, Avatar } from "antd";
import "antd/dist/antd.css";
const { Meta } = Card;

const UserVideosCard = (props) => {
	const data = props.data;
	const humanDate = new Date(
		Date.parse(data.created_at))
		.toLocaleString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
			hour: "numeric",
			minute: "2-digit"
		});

	console.log(9, humanDate);

	return (
		<Card className="video-card"
			// style={{ width: 300 }}
			cover={<img src={data.thumbnail} />}
		>
			<Meta style={{ textAlign: "left" }}
				title={data.title}
				description={
					data.description &&
					<>
						<p className="tiny">{humanDate}</p>
						<p className="small">{data.description}{data.description}</p>
					</>
				}
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
