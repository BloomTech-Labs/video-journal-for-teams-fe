import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const starRating = (props) => {
	return (
		<div>
			{[...Array(5)].map((star) => {
				return (
					<>
						<input type="radio" name="rating"></input>
						<FaStar className="star" size={50} />
					</>
				);
			})}
		</div>
	);
};

export default starRating;
