import axios from "axios";
import { useEffect, useState } from "react";

export function Project() {
	const [projects, setProjects] = useState<any[]>([]);

	useEffect(() => {
		getApiGitRepos();
	}, []);

	function getApiGitRepos() {
		axios
			.get("https://api.github.com/users/Rafeso/repos")
			.then(function (response) {
				setProjects(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}
	return (
		<div className="flex flex-col bg-gray-300 gap-3 p-10 max-sm:p-1 border border-emerald-900 rounded-lg ">
			<div className="flex flex-col">
				<strong className="text-slate-100 text-lg text-center mb-5 text-xl">
					Sobre mim
				</strong>
				<div className="bg-gray-700 p-2 rounded-lg">
					<p className="text-gray-200 max-sm:text-normal lg:text-justify text-base font-bold">
						Olá, meu nome e Rafael Feitosa de Souza, tenho 19 anos, desde o colégio
						sempre gostei de tecnologia, acompanhava lançamentos e notícias sobre o
						que acontecia no mundo, entretanto 2022 foi o ano em que de fato resolvi
						mergulhar nesse universo, fiz testes em diversas tecnologias falei com
						pessoas da área, mas encontrei minha paixão no desenvolvimento web, porque
						sinto que através dessa tecnologia posso contribuir gerando valor ao
						mundo. A grande oportunidade veio com muita dedicação onde com a nota do
						Enem consegui uma bolsa de 100% na Fiap no curso de Análise e
						Desenvolvimento de Software, posso dizer que aqui meus sonhos se tornaram
						realidade já que meus planos antes eram de ser piloto da força aérea. Com
						ajuda dos meus pais consegui ingressar na formação Ignite da Rocketseat
						que tem seu foco em React e no conteúdo mais atualizado do mercado, tudo
						que busco é uma oportunidade de mostrar meu valor, que o meu esforço
						superará todas as barreiras que eu encontrar, até lá fiquem a vontade para
						navegarem pelos meus projetos na estrada até aqui.
					</p>
				</div>
			</div>
			<div className="flex items-center justify-center pb-5 w-full bg-gray-">
				<strong className="w-full text-gray-100 text-xl text-center">
					Projetos
				</strong>
			</div>
			<div className="grid grid-flow-cols 2xl:grid-cols-4 xl:grid-cols-2 w-full justify-center gap-6 border-t-2 pt-5 rounded-lg border-gray-500">
				{projects.slice(0, 12).map((project) => (
					<div
						key={project.id}
						className="bg-gray-700 rounded-lg p-5 text-center h-[10rem] md:h-[15rem] max-sm:h-[15rem]"
					>
						<a
							href={project.html_url}
							target="_blank"
							rel="noreferrer"
						>
							<strong className="flex text-gray-100 text-base mb-2 justify-center">
								{project.name}
							</strong>
						</a>
						<p className="text-gray-200 text-sm">{project.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

