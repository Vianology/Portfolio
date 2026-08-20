import type { Project } from '../types/projectType';

import project1 from "../assets/projects/1.png";
import project2 from "../assets/projects/2.png";
import project3 from "../assets/projects/3.png";
import project4 from "../assets/projects/4.png";

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Concours Étudiant de Conception et de Fabrication de Drones (CECFD)',
    description: 'Conception d\'un drone quadricoptère autonome dédié à la surveillance aéroportuaire, la détection de débris (FOD) et l\'inspection du balisage visuel par imagerie thermique et traitement IA.',
    technologies: ['Arduino', 'ESP32', 'C++', 'Python'],
    image: project4,
    demoLink: 'docs/fiche_frojet_skyforge_ANAC_CECFD.pdf',
    featured: true,
    category: 'embedded',
    date: 'En cours'
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
    date: 'Juillet 2026'
  },
  {
    id: 3,
    title: 'CoopLedger | Miabé Hackathon',
    description: 'Plateforme web et API pour la gestion comptable et la traçabilité des opérations des coopératives.',
    technologies: ['JavaScript', 'React.js', 'Node.js', 'CSS'],
    image: project1,
    demoLink: 'https://coopledger-app.onrender.com/',
    repoLink: 'https://github.com/Vianology/CoopLedger_Web_App',
    featured: true,
    category: 'web',
    date: 'Mai 2026'
  },
  
  {
    id: 4,
    title: 'Pascal Auto Run',
    description: "Pascal Auto Run est une extension pour Visual Studio Code conçue pour simplifier le développement en Pascal. Elle permet de compiler et d'exécuter des programmes Pascal en un seul clic directement depuis l'éditeur, en s'appuyant sur le compilateur Free Pascal (fpc).",
    technologies: ['JavaScript'],
    image: project3,
    demoLink: 'https://marketplace.visualstudio.com/items?itemName=Vianology.pascal-auto-run',
    repoLink: 'https://github.com/Vianology/pascal-auto-run/',
    featured: true,
    category: 'extension',
    date: '18/01/2026'
  },
];