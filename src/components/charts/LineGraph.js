import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import { getDate } from "../utils/formatDate";

export default function LineGraph() {
	const data = useSelector((state) => state.User.userVideoFeedback.score_over_time);
	const formattedData = data
		.map((dates) => {
			return { overall_performance: dates.overall_performance, created_at: getDate(dates.created_at) };
		})
		.reverse();

	return (
		<div>
			<LineChart width={800} height={600} data={formattedData}>
				<CartesianGrid strokeDasharray="5 5" />
				<XAxis dataKey="created_at" />
				<YAxis interval="overall_performance" />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="overall_performance" stroke="#8884d8" activeDot={{ r: 8 }} />
			</LineChart>
		</div>
	);
}
