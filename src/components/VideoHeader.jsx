import React from "react";

const VideoHeader = ({
	title,
	channelName,
	channelSubscribers,
	channelImage,
	likes,
}) => {
	const formatViewCount = (count) => {
		if (count >= 1_000_000) {
			return (count / 1_000_000).toFixed(1) + "M views";
		} else if (count >= 1_000) {
			return (count / 1_000).toFixed(1) + "K views";
		}
		return count + " subscribers";
	};

	const formatLikes = (count) => {
		if (count >= 1_000_000) {
			return (count / 1_000_000).toFixed(1) + "M";
		} else if (count >= 1_000) {
			return (count / 1_000).toFixed(1) + "K views";
		}
		return count;
	};

	return (
		<div>
			<h1 className="text-lg font-bold md:text-xl pl-4">{title}</h1>
			<div className=" text-white p-4 flex flex-col md:flex-row items-start md:items-center justify-between">
				<div className="flex items-start md:items-center">
					<div className="md:mr-4">
						<img
							src={channelImage}
							alt={`${channelName} channel`}
							className="w-12 h-12 rounded-full"
						/>
					</div>
					<div className="flex flex-col">
						<div className="flex space-x-9 mt-2">
							<div className="flex flex-col mt-2 md:mt-0">
								<span className="text-sm text-gray-400">{channelName}</span>
								<span className=" text-xs text-gray-500">
									{formatViewCount(channelSubscribers)}
								</span>
							</div>
							<button className="bg-white hover:opacity-80 text-black py-1 px-4 rounded-3xl">
								Subscribe
							</button>
						</div>
					</div>
				</div>
				<div className="mt-4 md:mt-0 flex items-center space-x-4">
					<div className="flex items-center space-x-2">
						<button className="flex space-x-2 bg-[#262626] border border-[#262626] hover:opacity-80 text-white py-2 px-4 rounded-3xl">
							<div>
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
										d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
									/>
								</svg>
							</div>
							<span>{formatLikes(likes)}</span>
						</button>

						<button className="flex space-x-2 bg-[#262626] border border-[#262626] hover:opacity-80 text-white py-2 px-4 rounded-3xl">
							<div>
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
										d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
									/>
								</svg>
							</div>
							<span>Share</span>
						</button>
					</div>
				</div>
			</div>
            <div>
                
            </div>
		</div>
	);
};

export default VideoHeader;
