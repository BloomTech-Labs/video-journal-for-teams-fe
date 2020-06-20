import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { setFeedback } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

export default function Stars(props) {
	const [rating, setRating] = useState(null);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.User);

	const handleStars = (name, value) => {
		setRating(value);
		dispatch(setFeedback(name, value));
	};
	return (
		<div>
			{[...Array(5)].map((_, i) => {
				const ratingValue = ++i;
				return (
					<label>
						<input type="radio" name="rating" onClick={() => handleStars(props.values, ratingValue)}></input>
						<FaStar className="star" color={ratingValue <= rating ? "yellow" : "grey"} size={30} value={ratingValue} />
					</label>
				);
			})}
		</div>
	);
}
