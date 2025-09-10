import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ashutoshkhandai',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ashutoshkhandai/',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/ashutosh_765',
      label: 'Instagram',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center space-y-6">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="text-3xl font-bold cursor-pointer hover:scale-105 transition-transform duration-200"
          >
            <span className="text-aurora-primary">A</span>
            <span className="text-aurora-accent">K</span>
          </button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-muted-foreground hover:text-aurora-primary hover:scale-110 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#home"
              className="text-muted-foreground hover:text-aurora-primary transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-aurora-primary transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-muted-foreground hover:text-aurora-primary transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-aurora-primary transition-colors duration-200"
            >
              Contact
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-border pt-6 w-full">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              © {currentYear} Designed & Built with
              <className="h-4 w-4 text-red-500 animate-pulse" />
              by
              <span className="text-aurora-primary font-medium">Ashutosh Khandai</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
