import React from 'react'
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';

const UserVideosCard = (props) => {
	const item = props.item;
	return (
		<Layout>
			<Row gutter={[16, 16]}>
				<Col span={4}>
					<img src={item.fs_path} height={100} width={100} />
				</Col>
				<Col span={8} style={{ textAlign: "left" }}>
					<h3>Title: {item.title}</h3>
					<ul style={{ listStyleType: "none" }}>
						{item.description && <li>Desc: {item.description}</li>}
						<li>Creation: {item.created_at}</li>
					</ul>
				</Col>
				<Col span={12} style={{ textAlign: "left" }}>
					<p>Feedbacks go here?</p>
				</Col>
			</Row>
		</Layout>
	)
}

export default UserVideosCard
