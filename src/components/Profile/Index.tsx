import { CaretRight, Envelope, GithubLogo, Globe, LinkedinLogo, MapPin, PhoneCall } from "phosphor-react";

export function Profile() {
	return (
		<div className="flex flex-col items-start lg:w-[80rem] gap-3">
			<section className="flex flex-col items-center justify-center rounded-md bg-gray-300 w-full gap-2 p-5">
				<img
					className="border-2 rounded-full border-emerald-900"
					src="https://avatars.githubusercontent.com/u/108298221?v=4"
					alt=""
					width={128}
				/>
				<div className="flex flex-col items-center">
					<strong className="text-gray-200 font-bold text-base ">
						Rafael Feitosa de Souza
					</strong>
					<p className="text-gray-200 text-sm">Web Developer</p>
				</div>
			</section>

			<section className="flex flex-col items-start justify-center rounded-md bg-gray-300 p-10 w-full text-gray-200">
				<strong className="flex items-center text-lg mb-5 border-b border-emerald-900 w-full">
					<CaretRight
						size={20}
						color="#06ac6d"
					/>
					Contato
				</strong>
				<ul>
					<li className="flex gap-5 pb-4">
						<MapPin size={25} /> Brasil
					</li>
					<li className="flex gap-5 pb-4">
						<GithubLogo size={25} />
						<a
							href="https://github.com/Rafeso"
							target="_blank"
							rel="noopener noreferrer"
						>
							Rafeso
						</a>
					</li>
					<li className="flex gap-5 pb-4">
						<LinkedinLogo size={25} />
						<a
							href="https://www.linkedin.com/in/rafael-feitosa-618472241/"
							target="_blank"
							rel="noopener noreferrer"
						>
							rafael-feitosa-souza
						</a>
					</li>
					<li className="flex gap-5 pb-4">
						<Globe size={25} />
						<a
							href="/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Meu Site
						</a>
					</li>
					<li className="flex gap-5 pb-4">
						<Envelope size={25} />
						<a href="mailto:rafaefeitosa@gmail.com">rafaefeitosa@gmail.com</a>
					</li>
					<li className="flex gap-5">
						<PhoneCall size={25} />
						<a href="#">+55 11 93955-5105</a>
					</li>
				</ul>
			</section>

			<section className="flex flex-col text-start justify-center rounded-md bg-gray-300 p-10 w-full text-gray-200">
				<strong className="flex items-center text-lg mb-5 border-b border-emerald-900 w-full">
					<CaretRight
						size={20}
						color="#06ac6d"
					/>
					Tecnologias
				</strong>
				<ul className="grid grid-cols-2 gap-3 w-full">
					<li className="flex items-center justify-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
							width={35}
						/>
					</li>
					<li className="flex items-center justify-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
							width={40}
						/>
					</li>
					<li className="flex items-center justify-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
							width={40}
						/>
					</li>
					<li className="flex items-center justify-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
							width={40}
						/>
					</li>
					<li className="flex items-center justify-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
							width={40}
						/>
					</li>
					<li className="flex items-center justify-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
							width={40}
						/>
					</li>
					<li className="flex items-center justify-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
							width={40}
						/>
					</li>
					<li className="flex items-center justify-center">
						<img
							src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
							width={40}
						/>
					</li>
				</ul>
			</section>

			<section className="flex flex-col items-start justify-center rounded-md bg-gray-300 p-10 w-full text-gray-200">
				<strong className="flex items-center text-lg mb-5 border-b border-emerald-900 w-full">
					<CaretRight
						size={20}
						color="#06ac6d"
					/>
					Educação
				</strong>
				<ul className="flex flex-col gap-2">
					<li className="flex flex-col">
						<strong>FIAP</strong>
						<span>2022 - Em curso</span>
						<p>Análise e Desenvolvimento de Sistemas</p>
					</li>
					<li className="flex flex-col">
						<strong>RocketSeat</strong>
						<span>2022 - Em curso</span>
						<p>Ignite</p>
					</li>
				</ul>
			</section>
		</div>
	);
}

