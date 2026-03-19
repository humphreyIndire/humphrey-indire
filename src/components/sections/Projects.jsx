import React, { useState } from "react";
import { PROJECTS } from "../../constants";
import { useFadeIn } from "../../hooks/useFadeIn";
import ProgressiveImage from "../ui/ProgressiveImage";

const Projects = () => {
  const headerRef = useFadeIn();
  const gridRef = useFadeIn();
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (index) => {
    setExpandedProjects((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section className="bg-white py-24 px-6 md:px-20 lg:px-24" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 fade-in" ref={headerRef}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Major Projects &<br />
            Strategic Initiatives
          </h2>
          <p className="section-desc">
            Climate finance, energy transition, and sustainability initiatives
            shaping emerging markets through strategic cross-border
            partnerships.
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in"
          ref={gridRef}
        >
          {PROJECTS.map((project, i) => (
            <div
              key={i}
              className="border border-border-subtle rounded-[20px] overflow-hidden transition-all duration-300 hover:border-accent hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 group"
            >
              <div className="w-full h-[180px] md:h-[250px] relative overflow-hidden group">
                {project.image ? (
                  <ProgressiveImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className={`w-full h-full ${project.imageBg} flex items-center justify-center`}
                  >
                    <span className="text-[13px] text-white/20">
                      Project image placeholder
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 bg-accent/90 backdrop-blur-md border border-accent text-white text-[11px] font-semibold tracking-[0.1em] uppercase py-1.5 px-3 rounded-full z-10">
                  {project.category}
                </span>
              </div>

              <div className="p-7 md:p-8">
                <h3 className="font-dm-sans text-xl md:text-2xl font-bold text-primary mb-2.5 leading-tight group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                {project.company && (
                  <div className="text-[12px] font-bold text-accent tracking-[0.05em] uppercase mb-4 flex items-center gap-1.5">
                    <span className="w-4 h-px bg-accent"></span>
                    {project.company}
                  </div>
                )}
                <p className="text-sm text-text-muted leading-relaxed mb-5">
                  {project.desc}
                </p>

                <ul className="flex flex-col gap-2 mb-6">
                  {(expandedProjects[i]
                    ? project.outcomes
                    : project.outcomes.slice(0, 3)
                  ).map((outcome, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-2 text-[13px] text-text-muted leading-relaxed"
                    >
                      <span className="text-accent font-bold mt-0.5 whitespace-nowrap">
                        ✓
                      </span>{" "}
                      {outcome}
                    </li>
                  ))}
                </ul>

                {project.outcomes.length > 3 && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleExpand(i);
                    }}
                    className="text-[13px] font-bold text-accent mb-6 hover:text-primary transition-colors flex items-center gap-1 w-fit"
                  >
                    {expandedProjects[i]
                      ? "See Less"
                      : `+${project.outcomes.length - 3} More`}
                  </button>
                )}

                <div className="flex justify-between items-center border-t border-border-subtle pt-6 mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                      HI
                    </div>
                    <div>
                      <div className="text-[12px] font-semibold text-primary leading-none mb-0.5">
                        {project.lead}
                      </div>
                      <div className="text-[10px] text-text-muted uppercase tracking-tight">
                        {project.role}
                      </div>
                    </div>
                  </div>
                  {/* <a href={project.link} className="text-[13px] font-semibold text-accent hover:text-primary transition-colors flex items-center gap-1">
 Case Study →
 </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
