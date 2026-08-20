import type { Experience } from '../types/experiencesType';
import {Cpu } from 'lucide-react';

import coopledger from '../assets/companies/coopledger.png';

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 1,
    role: 'Développeur Frontend',
    company: 'CoopLedger | Miabé Hackathon',
    period: 'Mai 2026',
    description: 'Plateforme de gestion des coopératives agricoles togolaises basée sur la blockchain.',
    location: 'Lomé, Togo',
    current: false,
    companyLogo: coopledger,
    technologies: ['React', 'TypeScript'],
    achievements: [
      'Développement du frontend de la plateforme.',
    ]
  },
  {
    id: 2,
    role: 'Chargé du système embarqué',
    company: 'Skyforge | Concours (CECFD) ANAC',
    period: 'En cours',
    description: 'Conception d\'un drone quadricoptère de surveillance de pistes aéroportuaires (détection de FOD et inspection du balisage), dans le cadre du concours national de drones organisé par l\'ANAC Togo.',
    location: 'Lomé, Togo',
    current: true,
    icon: Cpu,
    technologies: ['C', 'C++', 'NRF24L01', 'GNSS'],
    achievements: [
      'Coordination de l\'équipe Skyforge',
      'Conception du système embarqué : avionique, télécommunications et sécurité de vol.'
    ]
  }
];