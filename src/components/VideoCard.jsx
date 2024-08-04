import React, { useEffect, useState } from "react";
import useSidebarStore from "../utils/useSidebarStore";
import {GOGGLE_API_KEY} from "../utils/constants";

const VideoCard = ({ info }) => {
	const IncVideoSize = useSidebarStore((state) => state.sidebarOpen);
	const { snippet, statistics } = info;
	const { title, thumbnails, channelTitle, publishedAt, channelId } = snippet;
	const { viewCount } = statistics;

	const [channelLogo, setChannelLogo] = useState("");

	useEffect(() => {
		const fetchChannelLogo = async () => {
			const response = await fetch(
				`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${GOGGLE_API_KEY}`
			);
			const data = await response.json();
			console.log(data);
			if (data.items.length > 0) {
				setChannelLogo(data.items[0].snippet.thumbnails.default.url);
			}
		};

		fetchChannelLogo();
	}, [channelId]);

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
					? "max-[320px]:w-[8rem] max-[400px]:w-[10rem] max-[500px]:w-[11.5rem] md:w-[20rem]"
					: "max-[320px]:w-[6rem] max-[400px]:w-[8rem] max-[500px]:w-[9.5rem] md:w-[24rem]"
			}`}
		>
			<img
				src={thumbnails.medium.url}
				alt={title}
				className="w-full h-auto object-cover rounded-lg"
			/>
			<div className="pt-2 md:pt-4 flex items-start">
				{channelLogo && (
					<img
						src={channelLogo}
						alt={channelTitle}
						className="w-5 h-5 md:w-10 md:h-10 rounded-full mr-2"
					/>
				)}
				<div className="flex flex-col">
					<h1 className="text-[0.5rem] md:text-sm font-bold w-full line-clamp-2">
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
		</div>
	);
};

export default VideoCard;
