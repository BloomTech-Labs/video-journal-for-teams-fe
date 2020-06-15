import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function BarGraph({ data }) {
	return (
		<div className="graph_wrapper">
			<BarChart
				width={800}
				height={500}
				data={data}
				layout="vertical"
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<XAxis ticks={[1, 2, 3, 4, 5]} domain={[0, 5]} type="number" />
				<YAxis type="category" dataKey="field" />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Bar dataKey="score" fill="#FF7F50" />
				<Legend />
			</BarChart>
		</div>
	);
}
