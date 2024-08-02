import React from "react";

const Button = ({ name }) => {
	return (
		<div className="inline-block">
			<button className="h-4 md:h-10 px-2 md:px-3 md:py-1.5 rounded-lg bg-[#262626] text-xs md:text-base text-white font-bold whitespace-nowrap">
				{name}
			</button>
		</div>
	);
};

export default Button;
