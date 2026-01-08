import { ExternalLink, Github, Folder } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  external?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'Smart ATS',
    description:
      'Built an AI-powered Applicant Tracking System (ATS) that evaluates resumes against job descriptions, providing match percentages, missing keywords, and professional feedback using Gemini API.',
    tech: ['Python', 'Streamlit', 'Google Gemini API', 'PyPDF2'],
    github: 'https://github.com/your-username/smart-ats',
    featured: true,
  },
  {
    title: 'Food Ordering Application',
    description:
      'Developed a full-stack food ordering platform with restaurant prioritization based on ratings. Implemented role-based access for users and admins using MongoDB and REST APIs.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'REST APIs'],
    github: 'https://github.com/KishAsta/FOOD-ORDERING',
    featured: true,
  },
  {
    title: 'IoT-Based Wet Floor Detection System',
    description:
      'Designed a real-time accident prevention system using Arduino and ESP32. Integrated water sensors and MQTT for instant alert notifications.',
    tech: ['C++', 'Arduino', 'ESP32', 'MQTT'],
    github: 'https://github.com/KishAsta/wet-floor-detection',
    featured: true,
  },
  {
    title: 'Waste Classification System',
    description:
      'Built a CNN-based image classification system for automated waste segregation to promote environmental sustainability.',
    tech: ['Python', 'TensorFlow', 'CNN', 'OpenCV'],
    github: 'https://github.com/KishAsta/waste-classification',
  },
];

const ProjectsSection = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            Some Things I've Built
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          {/* ================= FEATURED PROJECTS ================= */}
          <div className="space-y-24 mb-20">
            {featuredProjects.map((project, index) => {
              const projectLink = project.external || project.github;

              return (
                <div
                  key={project.title}
                  className={`relative grid md:grid-cols-12 gap-4 items-center ${
                    index % 2 === 1 ? 'md:text-right' : ''
                  }`}
                >
                  {/* Image / Card */}
                  <div
                    className={`md:col-span-7 ${
                      index % 2 === 1 ? 'md:col-start-6' : ''
                    } relative rounded-lg overflow-hidden group`}
                  >
                    <a
                      href={projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:from-primary/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        <Folder
                          className="text-primary/50 group-hover:text-primary/80 transition-colors"
                          size={80}
                        />
                      </div>
                    </a>
                  </div>

                  {/* Content */}
                  <div
                    className={`md:col-span-6 md:absolute ${
                      index % 2 === 1 ? 'md:left-0' : 'md:right-0'
                    } z-10`}
                  >
                    <p className="font-mono text-primary text-sm mb-2">
                      Featured Project
                    </p>

                    <h3 className="text-2xl font-bold mb-4">
                      <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <div className="p-6 bg-card rounded-lg shadow-xl mb-4 border border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <ul
                      className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground mb-4 ${
                        index % 2 === 1 ? 'md:justify-end' : ''
                      }`}
                    >
                      {project.tech.map((t) => (
                        <li key={t} className="hover:text-primary transition-colors">
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div
                      className={`flex gap-4 ${
                        index % 2 === 1 ? 'md:justify-end' : ''
                      }`}
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View source on GitHub"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="View live project"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ================= OTHER PROJECTS ================= */}
          {otherProjects.length > 0 && (
            <>
              <h3 className="text-center text-xl font-semibold text-foreground mb-8">
                Other Noteworthy Projects
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {otherProjects.map((project) => {
                  const projectLink = project.external || project.github;

                  return (
                    <div
                      key={project.title}
                      className="p-6 bg-card rounded-lg border border-border card-hover group"
                    >
                      <div className="flex justify-between items-start mb-6">
                        <a
                          href={projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Folder className="text-primary" size={40} />
                        </a>

                        <div className="flex gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View source on GitHub"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github size={20} />
                            </a>
                          )}
                          {project.external && (
                            <a
                              href={project.external}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View live project"
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>

                      <h4 className="text-lg font-semibold mb-3">
                        <a
                          href={projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground group-hover:text-primary transition-colors"
                        >
                          {project.title}
                        </a>
                      </h4>

                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                        {project.description}
                      </p>

                      <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                        {project.tech.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
