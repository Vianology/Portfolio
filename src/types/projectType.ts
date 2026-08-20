export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;     
  technologies?: string[];
  demoLink?: string;       
  repoLink?: string;       
  featured?: boolean;      
  category?: 'web' | 'mobile' | 'embedded' | 'desktop' |'design'|'extension';
  date?: string; 
}