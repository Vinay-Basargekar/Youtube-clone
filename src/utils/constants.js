const GOGGLE_API_KEY = "AIzaSyB26wF8MlYDVJLst2ZhRXVyQMyLjtU5K_U";

const API1 = "AIzaSyCDEcHLLpzglf2Z14IEAzx1FlZTMZEbpJI";

export const YOUTUBE_API_URL =
	"https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
	GOGGLE_API_KEY;

export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&key=${GOGGLE_API_KEY}`;
