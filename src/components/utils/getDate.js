export const getDate = (dates, arr = [], length = 0) => {
	const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const timestamp = dates[length] ? new Date(dates[length].created_at) : null;
	const year = dates[length] ? timestamp.getFullYear() : null;
	const month = dates[length] ? months[timestamp.getMonth()] : null;
	const currentDay = dates[length] ? timestamp.getDate() : null;
	const formatted = {
		overall_performance: dates[length] ? dates[length].overall_performance : null,
		created_at: `${month} ${currentDay} ${year}`,
	};

	return length === dates.length ? arr.reverse() : getDate(dates, (arr = [...arr, formatted]), (length = length + 1));
};
