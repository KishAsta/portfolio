import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-primary text-sm mb-4">What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            I'm currently looking for new opportunities and my inbox is always open. Whether you
            have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:kishore@example.com"
            className="inline-flex items-center gap-2 px-8 py-4 text-primary border border-primary rounded font-medium hover:bg-primary/10 transition-all duration-300 hover-glow"
          >
            <Mail size={20} />
            Say Hello
          </a>

          <div className="flex justify-center items-center gap-6 mt-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:kishore@example.com"
              className="p-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-full transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8 text-sm text-muted-foreground">
            <MapPin size={16} />
            <span>Vellore, Tamil Nadu, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
