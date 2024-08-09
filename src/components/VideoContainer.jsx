import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = ({ selectedCategory }) => {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		getVideos();
	}, [selectedCategory]);

	const getVideos = async () => {
		try {
			let apiUrl;
			if (selectedCategory === "") {
				apiUrl = `${YOUTUBE_API_URL}`;
			} else {
				apiUrl = `${YOUTUBE_API_URL}&videoCategoryId=${selectedCategory}`;
			}
			const response = await fetch(apiUrl);
			const data = await response.json();
			setVideos(data.items || []);
		} catch (error) {
			console.error("Error fetching videos:", error);
			setVideos([]);
		}
	};

	return (
		<div className="flex flex-wrap pt-2">
			{videos.map((video) => (
				<Link key={video.id} to={"/watch?v=" + video.id}>
					<VideoCard info={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
