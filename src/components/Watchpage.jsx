import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import VideoHeader from "./VideoHeader";
import { GOGGLE_API_KEY } from "../utils/constants";
import RecommendedVideos from "./RecommendedVideos";

const Watchpage = () => {
	const [searchParams] = useSearchParams();
	const [videoInfo, setVideoInfo] = useState(null);
	const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 600);

	useEffect(() => {
		const fetchVideoDetails = async () => {
			const videoId = searchParams.get("v");
			const response = await fetch(
				`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${GOGGLE_API_KEY}`
			);
			const data = await response.json();
			const videoDetails = data.items[0];
			// console.log(videoDetails);

			const channelId = videoDetails.snippet.channelId;
			const channelResponse = await fetch(
				`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${GOGGLE_API_KEY}`
			);
			const channelData = await channelResponse.json();
			const channelDetails = channelData.items[0];

			setVideoInfo({
				title: videoDetails.snippet.title,
				channelName: videoDetails.snippet.channelTitle,
				channelSubscribers: channelDetails.statistics.subscriberCount,
				channelImage: channelDetails.snippet.thumbnails.default.url,
				likes: videoDetails.statistics.likeCount,
			});
		};

		fetchVideoDetails();
	}, [searchParams]);

	useEffect(() => {
		const handleResize = () => {
			setIsLargeScreen(window.innerWidth >= 600);
		};

		window.addEventListener("resize", handleResize);

		// Clean up event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	if (!videoInfo) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex space-x-4 w-[100%] overflow-x-hidden">
			<div>
				<div className="p-2 pt-0 ">
					<iframe
						className="w-[100%] md:w-[65vw] h-[40vh] md:h-[65vh] rounded-xl"
						src={`https://www.youtube.com/embed/${searchParams.get(
							"v"
						)}?autoplay=1&loop=1&playlist=${searchParams.get("v")}`}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
						referrerPolicy="strict-origin-when-cross-origin"
					></iframe>
				</div>
				<div className="w-full">
					<VideoHeader
						title={videoInfo.title}
						channelName={videoInfo.channelName}
						channelSubscribers={videoInfo.channelSubscribers}
						channelImage={videoInfo.channelImage}
						likes={videoInfo.likes}
					/>
				</div>
			</div>
			{isLargeScreen && (
				<div>
					<RecommendedVideos />
				</div>
			)}
		</div>
	);
};

export default Watchpage;
