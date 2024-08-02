import React from "react";
import Button from "./Button";

const ButtonList = () => {
	const list = [
		"All",
		"Mixes",
		"Love",
		"Movies",
		"Computer programming",
		"Deadpool",
		"Indie pop music",
		"songs",
		"Travel",
		"Sports",
		"News",
		"Gaming",
		"Live",
		"Fashion",
		"Learning",
		"Podcasts",
		"Comedy",
		"DIY",
	];
	return (
		<>
			<div className="flex overflow-x-scroll whitespace-nowrap space-x-2 md:space-x-4">
				{list.map((item, index) => (
					<Button key={index} name={item} />
				))}
			</div>
		</>
	);
};

export default ButtonList;
