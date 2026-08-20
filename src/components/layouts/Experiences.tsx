import { SKILLS_DATA } from "../../data/skillsData";
import { EXPERIENCES_DATA } from "../../data/experiencesData";
import SectionHeader from "../ui/SectionHeader";

const Experiences = () => {
  return (
    <section id="experiences" className="py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Mes expériences" />

        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center md:items-start gap-6">
          {/* Compétences techniques */}
          <div className="grid grid-cols-3 gap-4 justify-items-center w-full md:w-auto md:max-w-xs mt-4 md:mt-0">
            {SKILLS_DATA.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.id}
                  className="flex flex-col items-center justify-center"
                >
                  <div className="flex items-center justify-center w-20 h-20 p-2 rounded-xl border-2 border-accent shrink-0">
                    {Icon ? (
                      <Icon className="w-16 h-16 text-accent" />
                    ) : skill.image ? (
                      <img
                        src={skill.image}
                        alt={skill.name}
                        className="w-16 h-16 object-contain"
                      />
                    ) : null}
                  </div>
                  <span className="mt-2 text-sm font-medium text-center">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Expériences */}
          <div className="w-full md:flex-1 flex flex-col gap-4">
            {EXPERIENCES_DATA.map((exp) => {
              const Icon = exp.icon;
              return (
                <div
                  key={exp.id}
                  className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-4 min-w-0">
                      {/* Icône ou Logo */}
                      {Icon ? (
                        <Icon className="w-10 h-10 text-accent shrink-0" />
                      ) : exp.companyLogo ? (
                        <img
                          className="w-10 h-10 object-contain shrink-0"
                          src={exp.companyLogo}
                          alt={exp.company}
                        />
                      ) : null}

                      {/* Titre & Entreprise */}
                      <div className="min-w-0">
                        <h3 className="text-xl text-accent font-bold leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-medium text-base-content/70 mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Badge période */}
                    <span className="badge badge-accent badge-outline whitespace-nowrap shrink-0">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <p className="mt-3 text-sm opacity-90">{exp.description}</p>
                  )}

                  {/* Liste d'accomplissements */}
                  {exp.achievements && exp.achievements.length > 0 && (
                    <ul className="list-disc list-inside mt-3 ml-2 space-y-1 text-sm">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;