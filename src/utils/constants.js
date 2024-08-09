export const GOGGLE_API_KEY = "AIzaSyDnrjbOAGxyR-X2SBNTitio3EwVwlZbgwM";

export const YOUTUBE_API_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
	GOGGLE_API_KEY;

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${GOGGLE_API_KEY}`;

export const categoryMapping = {
	All: "",
	"Film & Animation": "1",
	"Autos & Vehicles": "2",
	Music: "10",
	"Pets & Animals": "15",
	Sports: "17",
	Gaming: "20",
	Videoblogging: "21",
	"People & Blogs": "22",
	Comedy: "23",
	Entertainment: "24",
	"News & Politics": "25",
	"Howto & Style": "26",
	Education: "27",
	"Science & Technology": "28",
	"Nonprofits & Activism": "29",
	Movies: "30",
	"Anime/Animation": "31",
	"Action/Adventure": "32",
	Classics: "33",
	Documentary: "35",
	Drama: "36",
	Family: "37",
	Foreign: "38",
	Horror: "39",
	"Sci-Fi/Fantasy": "40",
	Thriller: "41",
	Shorts: "42",
	Shows: "43",
	Trailers: "44",
};


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