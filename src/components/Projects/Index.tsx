import { Heart } from "phosphor-react";
import { projects } from "../../data/projects"

export function Project() {
	return (
		<div className="flex flex-col bg-gray-300 gap-3 p-10 max-sm:p-5 border border-emerald-900 rounded-lg ">
			<div className="flex flex-col">
				<strong className="text-slate-100 text-lg text-center mb-5 text-xl underline decoration-emerald-700">
					Sobre mim
				</strong>
				<div className="bg-gray-700 p-2 rounded-lg">
					<p className="text-gray-200 max-sm:text-justify lg:text-justify text-base font-bold">
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
			<div className="flex items-center justify-center pb- w-full">
				<strong className="w-full text-gray-100 text-xl text-center underline decoration-emerald-700 mt-5">
					Projetos
				</strong>
			</div>
			<div className="grid grid-flow-cols 2xl:grid-cols-2 xl:grid-cols-2 w-full justify-center gap-6 border-t pt-3 border-emerald-900 rounded-lg">
				{projects.map((project) => (
					<div
						key={project.id}
						className="bg-gray-700 border border-emerald-900 rounded-lg p-5 text-center md:h-full max-sm:h-[15rem] shadow-md shadow-emerald-600 overflow-hidden"
					>
						<a
							href={project.repoUrl}
							target="_blank"
							rel="noreferrer"
							className="flex-inline"
						>
							<strong className="flex text-gray-100 text-2xl mb-3 justify-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-emerald-400 to-emerald-900 transition-all">
								{project.name}
							</strong>
						</a>
						<p className="text-gray-400 text-base mb-5">{project.description}</p>
						<a href={project.repoUrl}>
							<img className="flex items-center justify-center overflow-hidden h-[26rem] w-full object-cover object-center blur-sm contrast-100 hover:blur-0 hover:scale-[1.02] transition ease-in-out hover:shadow-md hover:shadow-emerald-500/50" src={`/projects/${project.photo}`} />
						</a>
					</div>
				))}
			</div>
			<footer className="flex items-center gap-2 justify-center mt-10 text-gray-200">
				Feito com <Heart color="#b91c1c" /> por Rafael Feitosa
			</footer>
		</div>
	);
}

