import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function BarGraph({ data }) {
	return (
		<div className="graph_wrapper">
			<BarChart
				width={window.screen.availWidth < 768 ? 350 : window.screen.availWidth < 1800 ? 700 : 800}
				height={window.screen.availHeight < 768 ? 300 : window.screen.availHeight < 1100 ? 550 : 600}
				data={data}
				layout="vertical"
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<XAxis ticks={[0, 1, 2, 3, 4, 5]} domain={[0, 5]} type="number" />
				<YAxis type="category" dataKey="field" />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Bar dataKey="score" fill="#FF7F50" />
				<Legend />
			</BarChart>
		</div>
	);
}
