import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
	const [video, setVideo] = useState([]);

	useEffect(() => {
		getVideos();
	}, []);

	const getVideos = async () => {
		try {
			const response = await fetch(YOUTUBE_API_URL);
			const data = await response.json();
			// console.log(data);
			setVideo(data.items);
		} catch (error) {
			console.error("Error fetching videos:", error);
		}
	};

	return (
		<div className="flex flex-wrap pt-2">
			{video.map((video) => (
				<Link key={video.id} to={"/watch?v=" + video.id}>
					<VideoCard info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
