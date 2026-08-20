import React from 'react';

export interface Skill {
  id: number;
  name: string;        
  category?: 'frontend' | 'backend' | 'database' | 'tools' | 'cli'; 
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert'; 
  icon?: React.ElementType; 
  image?: string;          
}