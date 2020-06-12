import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

export default function InviteRedirect() {
	const [seconds, setSeconds] = useState(15);
	const history = useHistory();
	useEffect(() => {
		let timeout;
		if (seconds === 0) {
			history.push("/user-dashboard");
			clearTimeout(timeout);
		} else {
			timeout = setTimeout(() => {
				setSeconds(seconds - 1);
			}, 1000);
		}
	}, [seconds]);
	return (
		<div>{`Please login/register first, then use your invite code link. You will be redirected to login/register in ${seconds} seconds`}</div>
	);
}
