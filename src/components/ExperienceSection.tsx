import { useState } from 'react';
import { Building2, Calendar, MapPin } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    company: 'PowerSchool',
    role: 'Software Engineer Intern',
    location: 'Bengaluru, Karnataka',
    period: 'July 2025 – Present',
    description: [
      'Designing and developing internal analytics applications using Snowflake and Streamlit, including multi-page Streamlit applications, to support business and operational insights.',
      'Implemented a Document Search/Intelligence solution with automated Snowflake deployment and AWS S3/SFTP-based ingestion.',
      'Automated QEM-based replication task and table operations at scale by enhancing internal APIs, with robust logging for execution tracking and error monitoring.',
      'Contributed to team tickets by upgrading Python versions, maintaining Docker images, and testing end-to-end application functionalities.',
    ],
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            Where I've Worked
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Tabs */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 relative ${
                    activeTab === index
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {exp.company}
                  {activeTab === index && (
                    <span className="absolute left-0 bottom-0 md:bottom-auto md:left-0 md:top-0 w-full md:w-0.5 h-0.5 md:h-full bg-primary" />
                  )}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="flex-1 min-h-[300px]">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`transition-opacity duration-300 ${
                    activeTab === index ? 'opacity-100' : 'hidden opacity-0'
                  }`}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {exp.role}{' '}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span className="font-mono">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
