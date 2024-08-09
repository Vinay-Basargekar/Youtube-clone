import React, { useEffect,useState } from "react";
import Button from "./Button";
import { categoryMapping, YOUTUBE_API_URL } from "../utils/constants";

const ButtonList = ({setSelectedCategory}) => {

	const list = [
		"All",
		"Film & Animation",
		"Autos & Vehicles",
		"Music",
		"Pets & Animals",
		"Sports",
		"Gaming",
		"Videoblogging",
		"People & Blogs",
		"Comedy",
		"Entertainment",
		"News & Politics",
		"Howto & Style",
		"Education",
		"Science & Technology",
		"Nonprofits & Activism",
		"Movies",
		"Anime/Animation",
		"Action/Adventure",
		"Classics",
		"Documentary",
		"Drama",
		"Family",
		"Foreign",
		"Horror",
		"Sci-Fi/Fantasy",
		"Thriller",
		"Shorts",
		"Shows",
		"Trailers",
	];

	const handleButtonClick = (name) => {
		const categoryId = categoryMapping[name] || "";
		setSelectedCategory(categoryId);
	}

	return (
		<>
			<div className="flex overflow-x-scroll whitespace-nowrap space-x-2 md:space-x-4 ">
				{list.map((item, index) => (
					<Button
						key={index}
						name={item}
						onClick={() => handleButtonClick(item)}
					/>
				))}
			</div>
		</>
	);
};

export default ButtonList;
