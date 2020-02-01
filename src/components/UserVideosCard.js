import React from 'react'
import { Card, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const UserVideosCard = (props) => {
	const data = props.data;
	return (
		<Card className="videoCard" size="small">
			<Row gutter={[16, 16]}>
				<Col span={6}>
					<img src={data.fs_path} height={100} width={100} />
				</Col>
				<Col span={3}>
					{/* Space only */}
				</Col>
				<Col span={15} style={{ textAlign: "left" }}>
						<p>{data.title}</p>
						{data.description && <p className="small">{data.description}</p>}
						<p className="small">{data.created_at}</p>
				</Col>
			</Row>
		</Card>
		// <Layout>
		// 		<Col span={12} style={{ textAlign: "left" }}>
		// 			<p>Feedbacks go here?</p>
		// 		</Col>
		// 	</Row>
		// </Layout>
	)
}

export default UserVideosCard
