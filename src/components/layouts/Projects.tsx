import SectionHeader from "../ui/SectionHeader";
import { PROJECTS_DATA } from "../../data/projetsData"
import { Link2 } from 'lucide-react';
import { FiGithub } from "react-icons/fi";


const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="mes projets"/>
        <div className="grid md:grid-cols-3 gap-4">
          {
              PROJECTS_DATA.map(project=>(
                  <div key={project.id} 
                  className="bg-base-300 p-5 h-full rounded-xl shadow-lg flex flex-col">
                      <img src={project.image} alt={project.title}
                      className="w-full rounded-xl h-56 object-cover"/>
                      <div>
                          <h3 className="my-2 font-bold">
                              {project.title}
                          </h3>
                          <p className="text-sm">
                              {project.description}
                          </p>
                      </div>
                      <div className="flex flex-wrap gap-2 my-3">
                          {
                              project.technologies?.map(techno => (
                                  <span key={techno} className="badge badge-accent badge-sm">
                                      {techno}
                                  </span>
                              ))
                          }
                      </div>
                      <div className="grid grid-cols-3 gap-2 w-full mt-auto">
                          {project.demoLink && (
                              <a 
                              href={project.demoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn btn-accent ${project.repoLink ? 'col-span-2' : 'col-span-3'}`}
                              >
                              Démo
                              <Link2 className="w-4 h-4 ml-1" />
                              </a>
                          )}

                          {project.repoLink && (
                              <a 
                              href={project.repoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`btn btn-accent ${project.demoLink ? 'col-span-1 btn-outline' : 'col-span-3'}`}
                              >
                              GitHub
                              <FiGithub className="w-4 h-4 ml-1" />
                              </a>
                          )}
                      </div>
                  </div>
              ))
          }
        </div>
      </div>
    </section>
  )
}

export default Projects