export const GOGGLE_API_KEY = "AIzaSyCI6-RU1-yZF_oIDbWmV9zrMhKdznPgtxY";

const API1 = "AIzaSyCDEcHLLpzglf2Z14IEAzx1FlZTMZEbpJI";
const API2 = "AIzaSyB26wF8MlYDVJLst2ZhRXVyQMyLjtU5K_U";
const API3 = "AIzaSyDnrjbOAGxyR-X2SBNTitio3EwVwlZbgwM";
const API4 = "AIzaSyCI6-RU1-yZF_oIDbWmV9zrMhKdznPgtxY";

export const YOUTUBE_API_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
	GOGGLE_API_KEY;

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${GOGGLE_API_KEY}`;


export const formatViewCount = (count) => {
	if (count >= 1_000_000) {
		return (count / 1_000_000).toFixed(1) + "M views";
	} else if (count >= 1_000) {
		return (count / 1_000).toFixed(1) + "K views";
	}
	return count + " views";
};

export const timeAgo = (dateString) => {
	const date = new Date(dateString);
	const now = new Date();
	const diffInSeconds = Math.floor((now - date) / 1000);

	const units = [
		{ name: "year", seconds: 31536000 },
		{ name: "month", seconds: 2592000 },
		{ name: "week", seconds: 604800 },
		{ name: "day", seconds: 86400 },
		{ name: "hour", seconds: 3600 },
		{ name: "minute", seconds: 60 },
		{ name: "second", seconds: 1 },
	];

	for (const unit of units) {
		const interval = Math.floor(diffInSeconds / unit.seconds);
		if (interval >= 1) {
			return interval === 1
				? `${interval} ${unit.name} ago`
				: `${interval} ${unit.name}s ago`;
		}
	}

	return "just now";
};

export const formatDate = (dateString) => {
	const date = new Date(dateString);
	return date.toLocaleDateString("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	});
};

export const totalSubscriber = (count) => {
	if (count >= 1_000_000) {
		return (count / 1_000_000).toFixed(1) + "M subscribers";
	} else if (count >= 1_000) {
		return (count / 1_000).toFixed(1) + "K subscribers";
	}
	return count + " subscribers";
};