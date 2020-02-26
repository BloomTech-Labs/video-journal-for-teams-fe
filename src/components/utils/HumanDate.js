export const humanDate = (date) => {
	return new Date(
		Date.parse(date))
		.toLocaleString("en-GB", {
			day: "numeric",
			month: "short",
			year: "numeric",
		});
}