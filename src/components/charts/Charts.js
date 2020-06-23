import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ResponsiveContainer } from "recharts";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import { fetchVideoFeedback } from "../../redux/actions/userActions";
import { formatFeedback } from "../utils/formatFeedback";

const Graph = () => {
	const [data, setData] = useState();
	const userId = useSelector((state) => state.User.userId);
	const dispatch = useDispatch();

	useEffect(() => {
		userId &&
			AxiosWithAuth()
				.get(`/v2/users/feedback/${userId}`)
				.then((res) => {
					dispatch(fetchVideoFeedback(res.data));
					setData(formatFeedback(res.data));
				})
				.catch((err) => console.log(err));
	}, []);

	return data && data.length && data[0].score !== 0 ? (
		<div
			style={{
				display: "flex",
				flexDirection: window.screen.availWidth > 767 ? "row" : "column",
				justifyContent: "space-evenly",
				margin: "5% 0",
			}}>
			<BarGraph data={data} />
			<LineGraph />
		</div>
	) : (
		<p>{"please check back for results"}</p>
	);
};

export default Graph;
