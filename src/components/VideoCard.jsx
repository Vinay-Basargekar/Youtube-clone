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
			className={`text-[#f2f2f2] m-1 md:m-2 rounded-lg overflow-hidden ${
				IncVideoSize
					? "max-[320px]:w-[8rem] max-[400px]:w-[10rem] max-[500px]:w-[11.5rem] max-[800px]:w-[13rem] md:w-[20rem]"
					: "max-[320px]:w-[6rem] max-[700px]:w-[9rem] md:w-[24rem]"
			}`}
		>
			<img
				src={thumbnails.medium.url}
				alt={title}
				className="w-full object-cover rounded-lg"
			/>
			<div className="pt-2 md:pt-4">
				<h1 className="text-[0.5rem] md:text-sm font-bold w-full truncate md:overflow-visible md:whitespace-normal">
					{title}
				</h1>
				<p className="text-[0.5rem] md:text-sm text-[#a3a3a3] truncate md:overflow-visible md:whitespace-normal">
					{channelTitle}
				</p>
				<p className="text-[0.5rem] md:text-sm text-[#a3a3a3] truncate md:overflow-visible md:whitespace-normal">
					{formatViewCount(viewCount)} • {formatDate(publishedAt)}
				</p>
			</div>
		</div>
	);
};

export default VideoCard;
