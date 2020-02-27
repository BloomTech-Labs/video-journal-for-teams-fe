import React from "react";

// Components
import { Table } from "antd";

// Setup columns and keys
const columns = [
	{
		title: "Name",
		dataIndex: "owner_name",
		key: "owner_name",
		render: (feedbackOwner) => <span>{feedbackOwner}</span>,
	},
	{
		title: "Feedback",
		dataIndex: "post",
		key: "post",
		render: (feedback) => <p>{feedback}</p>,
	},
];

function FeedbackTable({ feedback }) {
	return <Table columns={columns} dataSource={feedback} rowKey="id" />;
}

export default FeedbackTable;
