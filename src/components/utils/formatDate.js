export const getDate = (date) => {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let timestamp = new Date(date);
	let year = timestamp.getFullYear();
	let month = months[timestamp.getMonth()];
	let currentDay = timestamp.getDate();
	return `${month} ${currentDay} ${year}`;
};
