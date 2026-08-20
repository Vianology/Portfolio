
export interface Experience {
  id: number,
  role: string,           
  company: string,       
  period: string,         
  description: string,   
  location?: string,   
  technologies?: string[],
  achievements?: string[],
  companyLogo?: string,   
  icon? : React.ElementType,
  current?: boolean,
}