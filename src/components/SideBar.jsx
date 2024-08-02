import React from "react";
import useSidebarStore from "../utils/useSidebarStore";
import HomeIcon from "../utils/icons/homeIcon";
import MusicIcon from "../utils/icons/musicIcon";
import SubIcon from "../utils/icons/subIcon";
import ShortIcon from "../utils/icons/shortIcon";

const SideBar = () => {
	const toggleState = useSidebarStore((state) => state.sidebarOpen);

	return (
		<div
			className={`pl-4 h-screen cursor-pointer bg-black ${
				toggleState ? "w-12 md:w-16" : "w-32 md:w-48"
			} `}
		>
			<div className="flex mb-6 items-center ">
				<HomeIcon />
				{!toggleState && (
					<span className="text-white pl-2 text-xs md:text-base">Home</span>
				)}
			</div>
			<div className="flex mb-6 items-center">
				<ShortIcon />
				{!toggleState && (
					<span className="text-white pl-2 text-xs md:text-base">Shorts</span>
				)}
			</div>
			<div className="flex mb-6 items-center">
				<SubIcon />
				{!toggleState && (
					<span className="text-white pl-2 text-xs md:text-base">
						Subscription
					</span>
				)}
			</div>
			<div className="flex mb-6 items-center">
				<MusicIcon />
				{!toggleState && (
					<span className="text-white pl-2 text-xs md:text-base">
						Youtube music
					</span>
				)}
			</div>
		</div>
	);
};

export default SideBar;
