import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const SearchResult = () => {
	const [results, setResults] = useState([]);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const handleSearch = async () => {
			const response = await fetch(
				`${YOUTUBE_SEARCH_API}&q=${searchParams.get("q")}`
			);
			const data = await response.json();
			setResults(data.items);
			console.log(data.items);
		};
		handleSearch();
	}, [searchParams]);

	return (
		<div className="w-full p-1 line-clamp-2">
			{results.map((video) => (
				<Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
					<div className="flex items-start space-x-4 p-2 md:p-4 rounded-lg cursor-pointer hover:bg-[#333] transition-all">
						<img
							src={video.snippet.thumbnails.medium.url}
							alt={video.snippet.title}
							className="w-6/12 md:w-4/12  h-fit rounded-md"
						/>
						<div className="flex flex-col">
							<h3 className="text-sm md:text-xl text-white font-semibold mb-2 line-clamp-2 ">
								{video.snippet.title}
							</h3>
							<p className="text-xs text-gray-400 mb-1">
								Channel: {video.snippet.channelTitle}
							</p>
							<p className="text-xs text-gray-400 mb-1">
								Published:{" "}
								{new Date(video.snippet.publishTime).toLocaleDateString()}
							</p>
							<p className="text-[0.6rem] md:text-xs text-gray-200 line-clamp-2 md:line-clamp-none">
								{video.snippet.description}
							</p>
						</div>
					</div>
				</Link>
			))}
		</div>
	);
};

export default SearchResult;
