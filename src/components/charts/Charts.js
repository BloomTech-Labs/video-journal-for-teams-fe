import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import AxiosWithAuth from "../utils/AxiosWithAuth";
import BarGraph from "./BarGraph";
import { fetchVideoFeedback } from "../../redux/actions/userActions";

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
					setData([
						// { field: "overall performance", score: res.data.performance_score },
						{ field: "human response quality", score: res.data.human_response_quality },
						{ field: "human audio quality", score: res.data.human_audio_quality },
						{ field: "human visual environment", score: res.data.human_visual_environment },
						{ field: "attitude", score: res.data.attitude },
						{ field: "speaking speed", score: res.data.speaking_speed },
						{ field: "background noise", score: res.data.background_noise },
						{ field: "appearance facial centering", score: res.data.appearance_facial_centering },
					]);
				})
				// }
				.catch((err) => console.log(err));
	}, [userId]);

	return data && data.length && data[0].score !== 0 ? (
		<BarGraph data={data} />
	) : (
		<p>{"please check back for results"}</p>
	);
};

export default Graph;
