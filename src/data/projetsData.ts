import type { Project } from '../types/projectType';

import project1 from "../assets/projects/1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'CoopLedger',
    description: 'Plateforme web et API pour la gestion comptable et la traçabilité des opérations des coopératives.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'CSS'],
    image: project1,
    demoLink: 'https://coopledger-app.onrender.com/',
    repoLink: 'https://github.com/Vianology/CoopLedger_Web_App',
    featured: true,
    category: 'web',
    date: '2025'
  },
  {
    id: 2,
    title: 'Shooter',
    description: 'Jeu de shooting 2D réalisé avec pygame.',
    technologies: ['Python', 'Pygame'],
    image: project2,
    repoLink: 'https://github.com/Vianology/Shooter',
    featured: true,
    category: 'desktop',
    date: '2025'
  },
  {
    id: 3,
    title: 'Pascal Auto Run',
    description: "Pascal Auto Run est une extension pour Visual Studio Code conçue pour simplifier le développement en Pascal. Elle permet de compiler et d'exécuter des programmes Pascal en un seul clic directement depuis l'éditeur, en s'appuyant sur le compilateur Free Pascal (fpc).",
    technologies: ['JavaScript'],
    image: project3,
    demoLink: 'https://marketplace.visualstudio.com/items?itemName=Vianology.pascal-auto-run',
    repoLink: 'https://github.com/Vianology/pascal-auto-run/',
    featured: true,
    category: 'extension',
    date: '2026'
  },
  
];