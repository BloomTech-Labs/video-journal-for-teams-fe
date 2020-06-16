export const formatFeedback = (feedback) => {
	const categories = [
		"human response quality",
		"human audio quality",
		"human visual environment",
		"attitude",
		"speaking speed",
		"background noise",
		"appearance facial centering",
	];
	const objValues = Object.values(feedback);
	const formatted = categories.map((el, i) => {
		return { field: el, score: objValues[i] };
	});

	return formatted;
};
