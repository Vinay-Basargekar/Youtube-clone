import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_API_URL } from "../utils/constants";
import { formatViewCount } from "../utils/constants";
import { timeAgo } from "../utils/constants";

const RecommendedVideos = () => {
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
		<div className="flex flex-wrap w-11/12 overflow-x-auto">
			{video.map((video) => (
				<Link key={video.id} to={"/watch?v=" + video.id}>
					<div className="mb-4 flex ">
						<img
							src={video.snippet.thumbnails.medium.url}
							alt={video.snippet.title}
							className="w-40 h-18 rounded-lg mr-2"
						/>
						<div className="flex flex-col">
							<h3 className="text-sm font-bold line-clamp-2">
								{video.snippet.title}
							</h3>
							<p className="text-xs mt-2 text-[#a3a3a3]">
								{video.snippet.channelTitle}
							</p>
							<p className="text-xs text-[#a3a3a3]">
								{formatViewCount(video.statistics.viewCount)} •{" "}
								{timeAgo(video.snippet.publishedAt)}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default RecommendedVideos;
