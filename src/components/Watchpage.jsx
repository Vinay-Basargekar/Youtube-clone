import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import useSidebarStore from "../utils/useSidebarStore";

const Watchpage = () => {
	const toggleState = useSidebarStore((state) => state.setSidebarOpen);
	const [searchParams] = useSearchParams();
	console.log(searchParams.get("v"));

	// Close the sidebar when the component mounts
	useEffect(() => {
		toggleState();
	}, [toggleState]);

	return (
		<div className="p-2 pt-0 ">
			<iframe
				className="w-[60vw] h-[80vh] md:h-[70vh] rounded-lg"
				src={`https://www.youtube.com/embed/${searchParams.get(
					"v"
				)}?autoplay=1&loop=1&playlist=${searchParams.get("v")}`}
				title="YouTube video player"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
			></iframe>
		</div>
	);
};

export default Watchpage;
