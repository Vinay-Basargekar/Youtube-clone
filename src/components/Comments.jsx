import React, { useEffect, useState } from "react";
import { GOGGLE_API_KEY } from "../utils/constants";
import { useSearchParams } from "react-router-dom";

const timeAgo = (dateString) => {
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

const Comments = () => {
	const [searchParams] = useSearchParams();
	const [comments, setComments] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [totalComments, setTotalComments] = useState(0);

	const formatLikes = (count) => {
		if (count >= 1_000_000) {
			return (count / 1_000_000).toFixed(1) + "M ";
		} else if (count >= 1_000) {
			return (count / 1_000).toFixed(1) + "K ";
		}
		return count;
	};

	useEffect(() => {
		const videoId = searchParams.get("v");
		const fetchComments = async () => {
			try {
				const response = await fetch(
					`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${GOGGLE_API_KEY}`
				);
				const data = await response.json();

				if (data.error) {
					setError(data.error.message);
				} else {
					setComments(data.items);
					setTotalComments(data.pageInfo.totalResults);
				}
			} catch (error) {
				setError("Failed to fetch comments.");
			} finally {
				setLoading(false);
			}
		};

		fetchComments();
	}, [searchParams]);

	if (loading) {
		return <div>Loading comments...</div>;
	}

	if (error) {
		return <div>Error: {error}</div>;
	}

	return (
		<div className="p-4">
			<h1 className="text-lg font-bold md:text-xl">
				Comments({totalComments})
			</h1>
			{comments.map((comment) => (
				<div key={comment.id} className="md:mb-4 p-2 rounded-lg ">
					<div className="flex items-start space-x-4">
						<img
							src={
								comment.snippet.topLevelComment.snippet.authorProfileImageUrl
							}
							alt={comment.snippet.topLevelComment.snippet.authorDisplayName}
							className="w-10 h-10 rounded-full"
						/>
						<div>
							<div className="flex text-xs md:text-base items-center">
								<p className="font-bold text-white ">
									{comment.snippet.topLevelComment.snippet.authorDisplayName}
								</p>
								<p className="text-sm text-gray-400 pl-3 md:p-2">
									{timeAgo(comment.snippet.topLevelComment.snippet.publishedAt)}
								</p>
							</div>
							<div>
								<p className="text-white text-xs md:text-base">
									{comment.snippet.topLevelComment.snippet.textDisplay}
								</p>
							</div>
							<div className="flex items-center space-x-2 p-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
									/>
								</svg>

								<p className="text-sm text-gray-400">
									{formatLikes(
										comment.snippet.topLevelComment.snippet.likeCount
									)}
								</p>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
									/>
								</svg>
								<span className="cursor-pointer text-[#3ea4f7] p-1">
									{comment.snippet.totalReplyCount}{" "}
									{comment.snippet.totalReplyCount === 1 ? "reply" : "replies"}
								</span>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Comments;
