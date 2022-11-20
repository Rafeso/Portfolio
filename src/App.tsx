import { useEffect, useState } from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { BarLoader } from "react-spinners";

import { Profile } from "./components/Profile/Index";
import { Project } from "./components/Projects/Index";

export function App() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);
	return (
		<div>
			{loading ? (
				<div className="flex flex-col gap-5 text-gray-100 items-center justify-center min-h-screen bg-gray-700 ">
					<p>Por favor, me de um minuto enquanto preparo um café</p>
					<BarLoader
						width={200}
						color="#36d7b7"
					/>
				</div>
			) : (
				<div className="p-10 max-sm:p-1 bg-gray-700">
					<Fade cascade>
						<div className="flex max-md:flex-col gap-2 w-full h-full">
							<Profile />
							<Project />
						</div>
					</Fade>
				</div>
			)}
		</div>
	);
}

