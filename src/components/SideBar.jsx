import React from "react";
import { Link } from "react-router-dom";
import useSidebarStore from "../utils/useSidebarStore";
import HomeIcon from "../utils/icons/homeIcon";
import MusicIcon from "../utils/icons/musicIcon";
import SubIcon from "../utils/icons/subIcon";
import ShortIcon from "../utils/icons/shortIcon";

const SideBar = () => {
	const toggleState = useSidebarStore((state) => state.sidebarOpen);

	return (
		<div
			className={`pl-1.5 md:pl-4 h-screen cursor-pointer  ${
				toggleState ? "w-8 md:w-16" : "w-[7.5rem] md:w-56"
			} `}
		>
			<div className="flex mb-6 items-center ">
				<HomeIcon />
				{!toggleState && (
					<span className="text-white pl-1 md:pl-2 text-[0.6rem] md:text-base">
						<Link to="/">Home</Link>
					</span>
				)}
			</div>
			<div className="flex mb-6 items-center">
				<ShortIcon />
				{!toggleState && (
					<span className="text-white pl-1 md:pl-2 text-[0.6rem] md:text-base">
						Shorts
					</span>
				)}
			</div>
			<div className="flex mb-6 items-center">
				<SubIcon />
				{!toggleState && (
					<span className="text-white pl-1 md:pl-2 text-[0.6rem] md:text-base">
						Subscription
					</span>
				)}
			</div>
			<div className="flex mb-6 items-center">
				<MusicIcon />
				{!toggleState && (
					<span className="text-white pl-1 md:pl-2 text-[0.6rem] md:text-base">
						Youtube music
					</span>
				)}
			</div>
		</div>
	);
};

export default SideBar;
