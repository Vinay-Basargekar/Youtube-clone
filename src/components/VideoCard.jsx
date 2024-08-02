import React from "react";
import useSidebarStore from "../utils/useSidebarStore";

const VideoCard = ({ info }) => {

	const IncVideoSize = useSidebarStore((state) => state.sidebarOpen);

	const { snippet, statistics } = info;
	const { title, thumbnails, channelTitle, publishedAt } = snippet;
	const { viewCount } = statistics;

	const formatViewCount = (count) => {
		if (count >= 1_000_000) {
			return (count / 1_000_000).toFixed(1) + "M views";
		} else if (count >= 1_000) {
			return (count / 1_000).toFixed(1) + "K views";
		}
		return count + " views";
	};

	const formatDate = (dateString) => {
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<div
			className={`text-white m-4 rounded-lg overflow-hidden ${
				IncVideoSize ? "w-[25rem]" : "w-[22rem]"
			}`}
		>
			<img
				src={thumbnails.medium.url}
				alt={title}
				className="w-full  object-cover rounded-lg"
			/>
			<div className="pt-4">
				<h1 className="text-lg font-bold w-fit">{title}</h1>
				<p className="text-sm text-gray-400 truncate">{channelTitle}</p>
				<p className="text-sm text-gray-400">
					{formatViewCount(viewCount)} • {formatDate(publishedAt)}
				</p>
			</div>
		</div>
	);
};

export default VideoCard;
