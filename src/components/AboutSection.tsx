import { GraduationCap, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="flex items-center gap-4 text-2xl md:text-3xl font-bold text-foreground mb-12">
            About Me
            <span className="flex-1 h-px bg-border ml-4" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                Hello! I'm Kishore, a final-year Integrated M.Tech Software Engineering student at{' '}
                <span className="text-primary">Vellore Institute of Technology (VIT)</span> with strong foundations 
                in software development, data structures, and full-stack engineering.
              </p>
              <p className="leading-relaxed">
                Currently, I'm a Software Engineer Intern at{' '}
                <span className="text-primary">PowerSchool</span>, where I contribute to enterprise-scale data 
                platforms, analytics tools, and automation workflows. I enjoy creating things that live on the 
                internet, whether that be websites, applications, or anything in between.
              </p>
              <p className="leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                {['Python', 'JavaScript', 'React', 'Node.js', 'Snowflake', 'Streamlit', 'MongoDB', 'SQL'].map(
                  (tech) => (
                    <li key={tech} className="flex items-center gap-2">
                      <span className="text-primary">▹</span>
                      {tech}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg border border-border card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="text-primary" size={24} />
                  <h3 className="font-semibold text-foreground">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-foreground">M.Tech Software Engineering</p>
                    <p className="text-xs text-muted-foreground">VIT • CGPA: 8.64</p>
                    <p className="text-xs text-muted-foreground">2021 - 2026</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-lg border border-border card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="text-primary" size={24} />
                  <h3 className="font-semibold text-foreground">Location</h3>
                </div>
                <p className="text-sm text-muted-foreground">Vellore, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
