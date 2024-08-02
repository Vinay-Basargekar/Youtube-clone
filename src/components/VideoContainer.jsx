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
		const response = await fetch(YOUTUBE_API_URL);
		const data = await response.json();
		// console.log(data);
		setVideo(data.items);
	};

	return (
		<div className="flex flex-wrap">
			{video.map((video) => (
				<Link to={"/watch?v="+ video.id}>
					<VideoCard key={video.id} info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
