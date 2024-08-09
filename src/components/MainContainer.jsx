import React, { useState } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
	const [selectedCategory, setSelectedCategory] = useState("");

	return (
		<div className="w-screen overflow-hidden">
			<ButtonList setSelectedCategory={setSelectedCategory} />
			<VideoContainer selectedCategory={selectedCategory} />
		</div>
	);
};

export default MainContainer;
