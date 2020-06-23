import React from "react";
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Legend, Tooltip, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { getDate } from "../utils/getDate";

export default function LineGraph() {
	const data = useSelector((state) => state.User.userVideoFeedback.score_over_time);
	const recursiveFormat = getDate(data);
	console.log("width", window.screen.availWidth, "height", window.screen.availHeight);

	return (
		<div>
			<LineChart
				width={window.screen.availWidth < 768 ? 350 : window.screen.availWidth < 1800 ? 700 : 800}
				height={window.screen.availHeight < 768 ? 300 : window.screen.availHeight < 1100 ? 550 : 600}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				data={recursiveFormat}>
				<CartesianGrid strokeDasharray="5 5" />
				<XAxis dataKey="created_at" />
				<YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
				<Tooltip />
				<Legend />
				<Line
					strokeWidth="0.3rem"
					type="monotone"
					dataKey="overall_performance"
					stroke="#6954EA"
					dot={true}
					activeDot={{ r: 8 }}
				/>
			</LineChart>
		</div>
	);
}
