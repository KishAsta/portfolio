import { Code, Database, Wrench, Brain, Award, ExternalLink } from 'lucide-react';
import React from 'react';

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

interface Certification {
  title: string;
  issuer: string;
  link?: string;
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Code size={24} />,
    title: 'Programming',
    skills: ['Python', 'Java', 'SQL', 'JavaScript', 'C++'],
  },
  {
    icon: <Database size={24} />,
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React', 'Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    icon: <Wrench size={24} />,
    title: 'Tools & Platforms',
    skills: ['GitHub', 'GitLab', 'Streamlit', 'Snowflake', 'Docker', 'AWS S3'],
  },
  {
    icon: <Brain size={24} />,
    title: 'Core Concepts',
    skills: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'APIs'],
  },
];

const certifications: Certification[] = [
  {
    title: 'MERN Full Stack Development',
    issuer: 'SmartInternz',
    link: 'https://skillwallet.smartinternz.com/guided_projects/certificates/9778d5d219c5080b9a6a17bef029331c',
  },
  {
    title: 'Java Programming: Solving Problems with Software',
    issuer: 'Coursera',
    link: 'https://coursera.org/share/b4cb405332b506923c017c6221a5b7b3',
  },
  {
    title: 'Hands-On Essentials: Data Warehousing Workshop',
    issuer: 'Snowflake',
    link: 'https://achieve.snowflake.com/03fafe0a-edf3-4d3b-9355-3e615aa1c040#acc.Hk0A8j1O',
  },
   {
    title: 'Hands-On Essentials: Data Application Builders Workshop',
    issuer: 'Snowflake',
    link: 'https://achieve.snowflake.com/7e22f653-a2db-454f-97eb-11d0cc4bcb19#acc.173Q5jFU',
  },
   {
    title: 'Hands-On Essentials: Collaboration, Marketplace & Cost Estimation Workshop',
    issuer: 'Snowflake',
    link: 'https://achieve.snowflake.com/c6865939-f72b-4261-9066-d95f8187af92#acc.c5nIOpkJ',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            Skills & Certifications
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          {/* ================= SKILLS ================= */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-6 bg-card rounded-lg border border-border card-hover group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ================= CERTIFICATIONS ================= */}
          <div className="p-8 bg-card rounded-lg border border-border">
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-primary" size={28} />
              <h3 className="text-xl font-semibold text-foreground">
                Certifications
              </h3>
            </div>

            <ul className="space-y-4">
              {certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex items-start justify-between gap-4 group"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-primary mt-1">▹</span>
                    <div>
                      <h4 className="text-foreground font-medium group-hover:text-primary transition-colors">
                        {cert.link ? (
                          <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {cert.title}
                          </a>
                        ) : (
                          cert.title
                        )}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View certificate"
                      className="text-muted-foreground hover:text-primary transition-colors mt-1"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ================= LANGUAGES ================= */}
          <div className="mt-8 p-6 bg-card rounded-lg border border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Languages
            </h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <span className="text-muted-foreground">
                  English (Full Professional)
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <span className="text-muted-foreground">Tamil (Native)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">●</span>
                <span className="text-muted-foreground">
                  Telugu (Professional)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
