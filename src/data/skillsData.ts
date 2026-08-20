import type { Skill } from '../types/skillType';

import reactImg from '../assets/techno/react.png';
import tailwindImg from '../assets/techno/tailwind.png';
import typescriptSvg from '../assets/techno/typescript.svg';
import nodejsImg from '../assets/techno/node-js.png';
import pythonImg from '../assets/techno/python.png'
import javaImg from '../assets/techno/java.png'
import cImg from '../assets/techno/c.png'
import mysqlImg from '../assets/techno/mysql.png'
import postgresqlImg from '../assets/techno/postgresql.png'


export const SKILLS_DATA: Skill[] = [
  {
    id: 1,
    name: 'TypeScript',
    category: 'frontend',
    image: typescriptSvg,
  },
  {
    id: 2,
    name: 'React',
    category: 'frontend',
    image: reactImg,
  },
  {
    id: 3,
    name: 'Tailwind CSS',
    category: 'frontend',
    image: tailwindImg,
  },
  {
    id: 4,
    name: 'Node.js',
    category: 'backend',
    image: nodejsImg,
  },
  {
    id: 5,
    name: 'Python',
    category: 'cli',
    image: pythonImg,
  },
  {
    id: 6,
    name: 'Java',
    category: 'cli',
    image: javaImg,
  },
  {
    id: 7,
    name: 'Langage C',
    category: 'cli',
    image: cImg,
  },
  {
    id: 8,
    name: 'MySql',
    category: 'database',
    image: mysqlImg,
  },
  {
    id: 9,
    name: 'PostgreSql',
    category: 'database',
    image: postgresqlImg,
  },

];