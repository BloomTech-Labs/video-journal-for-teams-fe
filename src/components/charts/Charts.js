import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Graph = () => {
	const data = [
		{
			field: "overall performance",
			score: 88,
		},
		{
			field: "delivery and performance",
			score: 78,
		},
		{
			field: "audio quality",
			score: 48,
		},
		{
			field: "visual quality",
			score: 65,
		},
		{
			field: "delivery and performance",
			score: 78,
		},
	];

	return (
		<div className="graph_wrapper">
			<BarChart
				width={800}
				height={500}
				data={data}
				layout="vertical"
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
				<XAxis type="number" />
				<YAxis type="category" dataKey="field" />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Bar dataKey="score" fill="#6954EA" />
			</BarChart>
		</div>
	);
};

export default Graph;
