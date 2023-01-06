import { v4 as uuidv4 } from "uuid";

export const projects = [
	{
		id: uuidv4(),
		name: "ToDo List",
		repoUrl: "https://github.com/Rafeso/IgniteToDo",
		description:
			"ToDo para organizar seus itens a fazer, desafio realizado na trilha de ReactJs no bootcamp Ignite da Rocketseat.",
		photo: "ToDo.png",
	},
	{
		id: uuidv4(),
		name: "Code Feed",
		repoUrl: "https://github.com/Rafeso/IgniteFeed",
		description:
			"O Code Feed foi desenvolvido nas aulas introdutórias sobre React e suas funcionalidades como componentes, propriedades, estados, imutabilidade, e hooks, além de aplicar o TypeScript.",
		photo: "CodeFeed.png",
	},
	{
		id: uuidv4(),
		name: "Ignite Lab",
		repoUrl: "https://github.com/Rafeso/ignite-lab",
		description:
			"Projeto desenvolvido durante o evento Ignite Lab da Rocketseat, criação de design system do zero e deploy.",
		photo: "IgniteLab.png",
	},
	{
		id: uuidv4(),
		name: "eSports Explorer",
		repoUrl: "https://github.com/Rafeso/NLW-esports-explorer",
		description:
			"Projeto desenvolvido na NLW da Rocketseat para a criação de um card para eSports, com seus jogos favoritos e streamers.",
		photo: "eSportsExplorer.png",
	},
];
