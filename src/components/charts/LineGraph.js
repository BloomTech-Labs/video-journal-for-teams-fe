import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, Tooltip } from "recharts";
import { useSelector } from "react-redux";
import { getDate } from "../utils/getDate";

export default function LineGraph() {
	const data = useSelector((state) => state.User.userVideoFeedback.score_over_time);
	const recursiveFormat = getDate(data);

	return (
		<div>
			<LineChart width={800} height={500} data={recursiveFormat}>
				<CartesianGrid strokeDasharray="5 5" />
				<XAxis dataKey="created_at" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line type="monotone" dataKey="overall_performance" stroke="#6954EA" activeDot={{ r: 8 }} />
			</LineChart>
		</div>
	);
}
