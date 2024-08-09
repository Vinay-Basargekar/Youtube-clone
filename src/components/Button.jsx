import React from "react";

const Button = ({ name, onClick }) => {
	return (
		<div className="inline-block">
			<button
				onClick={() => onClick(name)}
				className="h-4 md:h-10 px-2 md:px-3 md:py-1.5 rounded-lg bg-[#262626] text-xs md:text-base text-white font-bold whitespace-nowrap 
                hover:bg-[#333333] hover:font-bold transition duration-200 ease-in-out"
			>
				{name}
			</button>
		</div>
	);
};

export default Button;
