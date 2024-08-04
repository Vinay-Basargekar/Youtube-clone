import "./App.css";
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/Watchpage";
import SearchResult from "./components/SearchResult";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
		children: [
			{
				path: "/",
				element: <MainContainer />,
			},
			{
				path: "/watch",
				element: <Watchpage />,
			},
			{
				path:"/search",
				element:<SearchResult/>,
			},
		],
	},
]);

function App() {
	return (
		<div className="bg-[#0f0f0f] text-white">
			<RouterProvider router={appRouter} />
		</div>
	);
}

export default App;
