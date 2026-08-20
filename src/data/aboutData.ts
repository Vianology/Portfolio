import type { AboutType } from '../types/aboutType';
import { Code2, Server, Cpu } from 'lucide-react';

export const ABOUT_INFOS: AboutType[] = [
  {
    id: 1,
    title: 'Développement Frontend',
    description: 'Conception d\'interfaces web full responsive avec React.js.',
    icon: Code2,
  },
  {
    id: 2,
    title: 'Développement Backend',
    description: 'Construction d\'APIs avec Node.js, Express et bases de données SQL, MongoDB.',
    icon: Server,
  },
  {
    id: 3,
    title: 'Systèmes Embarqués',
    description: 'Prototypage électronique avec Arduino et ESP32.',
    icon: Cpu,
  },
];