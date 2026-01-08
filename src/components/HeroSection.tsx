import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          <p className="font-mono text-primary mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Hi, my name is
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
            Kishore Babu U.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '400ms' }}>
            I'm a Software Engineer specializing in full-stack development, data platforms, and analytics tools.
            Currently contributing to enterprise-scale solutions at{' '}
            <a href="#experience" className="text-primary hover:underline">
              PowerSchool
            </a>
            .
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up" style={{ animationDelay: '500ms' }}>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border border-primary text-primary rounded font-medium hover:bg-primary/10 transition-all duration-300 hover-glow"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded font-medium hover:bg-primary/90 transition-all duration-300 glow"
            >
              Get In Touch
            </a>
          </div>

          <div className="flex items-center gap-6 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kishore@example.com"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
