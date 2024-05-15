import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	{
		name: 'Projects',
		hash: '#projects',
	},
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

export const experiencesData = [
	{
		title: 'Business Analyst I-III',
		company: 'MidFirst Bank',
		department: 'Contract Administration',
		location: 'Oklahoma City, OK',
		description:
			'My first role for MidFirst bank was in the Change Management department. However, I was quickly transitioned to the Contract Adminitration team to assist in implementing a new corporate strategy for portfolio acquisitions. I helped manage multi-billion dollar mortgage portfolio acquisitions, along with developing tools and processes to streamline the onboarding process.',
		icon: React.createElement(LuGraduationCap),
		date: '2014 - 2019',
	},
	{
		title: 'Business Analyst IV',
		company: 'MidFirst Bank',
		department: 'Collections & Collateral Management',
		location: 'Oklahoma City, OK',
		description:
			'I accepted a position in the Collections & Collateral Management team to serve as the analyst for both departments. This role consisted of systems administration, project management, and process design. I also learned VBA in order to begin developing several workflow databases using MS Access. During this period I completed the UIPath Developer certification.',
		icon: React.createElement(CgWorkAlt),
		date: '2019 - 2021',
	},
	{
		title: 'Assistant Vice President',
		company: 'MidFirst Bank',
		department: 'Collections & Collateral Management',
		location: 'Oklahoma City, OK',
		description:
			'I created a service account to manage automation scripts I programmed for my departments using Python, PowerShell and SQL. I also established an inter-departmental team consisting of all the analyst in Loan Operations to facilitate knowledge transfer and support. These two initiatives led to my promotion to Assistant Vice President, while still maintaining my role as business analyst for Collections & Collateral Management.',
		icon: React.createElement(CgWorkAlt),
		date: '2021 - 2024',
	},
	{
		title: '1st Assistant Vice President',
		company: 'MidFirst Bank',
		department: 'Collections & Collateral Management',
		location: 'Alhambra, CA (remote)',
		description:
			'In 2023, I served as the lead technical advisor and project manager for an enterprise-wide web application implementation. The successful implementation of the project led to a promotion to 1st Assistant Vice President. I continued my role as the analyst for both Collections & Collateral Management.',
		icon: React.createElement(FaReact),
		date: 'March 2024 - present',
	},
] as const;

export const projectsData = [
	{
		id: 1,
		title: 'E-commerce Store',
		shortDescription:
			'An e-commerce store using React on the front-end & C#/.Net/SQL back-end.',
		fullDescription:
			'ReStore- built using React front-end with C#/.Net/SQL back-end. Uses Stripe for payments, with full basket and demo payments. App is dockerized and hosted on Fly.io',
		tags: [
			'React',
			'Redux',
			'Material UI',
			'TypeScript',
			'C#',
			'ASP.NET',
			'Swagger',
			'SQL',
			'Stripe',
			'Docker',
		],
		imageUrl: corpcommentImg,
		demoUrl: 'https://ultimateqa.com/fake-landing-page',
		gitRepoUrl: 'https://ultimateqa.com/complicated-page',
	},
	{
		id: 2,
		title: 'Activity Social Media App',
		shortDescription:
			'A social media activities app React on the front-end & C#/.Net/SQL back-end.',
		fullDescription:
			'ReStore- built using React front-end with C#/.Net/SQL back-end. Uses SignalR for posting comments, FB login, MobX for state?, uses a PostgreSQL for dev databases. Uses Postman for API development.',
		tags: [
			'React',
			'Redux',
			'Semantic UI',
			'TypeScript',
			'C#',
			'ASP.NET',
			'Postman',
			'PostgreSQL',
			'SignalR',
			'MobX',
			'FB Login',
		],
		imageUrl: rmtdevImg,
		demoUrl: 'https://ultimateqa.com/automation/fake-pricing-page/',
		gitRepoUrl: 'https://ultimateqa.com/filling-out-forms/',
	},
	{
		id: 3,
		title: 'How2Help',
		shortDescription:
			'A passion project built to help people find ways to get involved in causes that matter to them. This app is built using React on the front-end & C#/.NET/SQL back-end.',
		fullDescription: 'Long description of How2Help here',
		tags: [
			'React',
			'Postman',
			'React Query',
			'TypeScript',
			'C#',
			'ASP.NET',
			'SQL',
			'CSS Modules',
		],
		imageUrl: wordanalyticsImg,
		demoUrl: 'https://courses.ultimateqa.com/users/sign_in',
		gitRepoUrl:
			'https://ultimateqa.com/simple-html-elements-for-automation/',
	},
	{
		id: 4,
		title: 'MERN E-commerce Store',
		shortDescription:
			'MERN stack e-commerce store with the following features: .........',
		fullDescription: 'Long description of MERN store here',
		tags: [
			'MongoDb',
			'ExpressJS',
			'React',
			'NodeJS',
		],
		imageUrl: wordanalyticsImg,
		demoUrl: 'https://courses.ultimateqa.com/users/sign_in',
		gitRepoUrl:
			'https://ultimateqa.com/simple-html-elements-for-automation/',
	},
];

export const skillsData = [
	'HTML',
	'CSS',
	'JavaScript',
	'TypeScript',
	'React',
	'Next.js',
	'Node.js',
	'Git',
	'Tailwind',
	'C#',
	'ASP.NET',
	'SQL',
	'Redux',
	'React Query',
	'Express',
	'PostgreSQL',
	'Framer Motion',
] as const;
