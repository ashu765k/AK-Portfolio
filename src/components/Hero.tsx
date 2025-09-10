// import { Button } from '@/components/ui/button';
// import { Github, Linkedin, Instagram, ArrowDown, Download } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import heroImage from '@/assets/hero-aurora-bg.jpg';

// const Hero = () => {
//   const { toast } = useToast();
  
//   const handleResumeDownload = () => {
//     toast({
//       title: "Resume downloaded shortly",
//       description: "Your download will begin in a moment.",
//     });
//   };

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       href: 'https://www.linkedin.com/in/ashutoshkhandai/',
//       label: 'LinkedIn',
//     },
//     {
//       icon: Instagram,
//       href: 'https://www.instagram.com/ashutosh_765',
//       label: 'Instagram',
//     },
//     {
//       icon: Github,
//       href: 'https://github.com/ashutoshkhandai',
//       label: 'GitHub',
//     },
//   ];

//   return (
//     <section
//       id="home"
//       className="min-h-screen flex items-center justify-center relative overflow-hidden"
//     >
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url(${heroImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div className="absolute inset-0 bg-background/60 dark:bg-background/40"></div>
//       </div>

//       {/* Aurora Overlay */}
//       <div className="absolute inset-0 z-10 hero-bg"></div>

//       {/* Content */}
//       <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
//         <div className="animate-fade-in">
//           <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-in-left no-hover">
//             <span className="text-aurora-primary no-hover">Ashutosh</span>
//             <br />
//             <span className="text-aurora-accent no-hover">Khandai</span>
//           </h1>

//           <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
//             B.Tech CSE, GIET University (2022–26)
//           </h2>

//           <div className="text-lg md:text-xl text-foreground mb-8 animate-float">
//             <span className="text-aurora-primary">Aspiring Software Developer</span>
//             <span className="text-muted-foreground"> | </span>
//             <span className="text-aurora-accent">Passion Web & Full-Stack Development</span>
//           </div>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//             <Button
//               className="btn-aurora px-8 py-3 text-lg font-medium"
//               onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
//             >
//               About Me
//             </Button>
//             <Button
//               variant="outline"
//               className="btn-ghost px-8 py-3 text-lg font-medium"
//               onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
//             >
//               View Projects
//             </Button>
//             <Button
//               variant="outline"
//               className="btn-ghost px-8 py-3 text-lg font-medium"
//               onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
//             >
//               Contact
//             </Button>
//             <a 
//               href="/resume.pdf" 
//               download="Ashutosh_Khandai_Resume.pdf"
//               className="inline-flex items-center justify-center gap-2 px-8 py-3 text-lg font-medium rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
//             >
//               <Download className="h-5 w-5" />
//               Resume
//             </a>
//           </div>

//           {/* Social Links */}
//           <div className="flex justify-center space-x-6 mb-12">
//             {socialLinks.map((social) => (
//               <a
//                 key={social.label}
//                 href={social.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="p-3 glass-card rounded-full hover:scale-110 hover:aurora-glow transition-all duration-300 group"
//                 aria-label={social.label}
//               >
//                 <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-aurora-primary transition-colors duration-300" />
//               </a>
//             ))}
//           </div>

//           {/* Scroll Indicator */}
//           <div className="animate-bounce">
//             <ArrowDown className="h-6 w-6 text-aurora-accent mx-auto" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, ArrowDown, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroImage from '@/assets/hero-aurora-bg.jpg';

const Hero = () => {
  const { toast } = useToast();
  
  const handleResumeDownload = () => {
    toast({
      title: "Resume downloaded shortly",
      description: "Your download will begin in a moment.",
    });
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/ashutoshkhandai/',
      label: 'LinkedIn',
    },
    {
      icon: Instagram,
      href: 'https://www.instagram.com/_ashutosh_765_?igsh=azQyejYwdG55a2Ry',
      label: 'Instagram',
    },
    {
      icon: Github,
      href: 'https://github.com/ashu765k',
      label: 'GitHub',
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/60 dark:bg-background/40"></div>
      </div>

      {/* Aurora Overlay */}
      <div className="absolute inset-0 z-10 hero-bg"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-in-left no-hover">
            <span className="text-aurora-primary no-hover">Ashutosh</span>
            <br />
            <span className="text-aurora-accent no-hover">Khandai</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            B.Tech CSE, GIET University (2022-26)
          </h2>

          <div className="text-lg md:text-xl text-foreground mb-8 animate-float">
            <span className="text-aurora-primary">Aspiring Software Developer</span>
            <span className="text-muted-foreground"> | </span>
            <span className="text-aurora-accent">Passion In Web & Full-Stack Development</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              className="btn-aurora px-8 py-3 text-lg font-medium"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About Me
            </Button>
            <Button
              variant="outline"
              className="btn-ghost px-8 py-3 text-lg font-medium"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button
              variant="outline"
              className="btn-ghost px-8 py-3 text-lg font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact
            </Button>
            <Button
              variant="outline"
              className="btn-ghost px-8 py-3 text-lg font-medium flex items-center gap-2"
              asChild
              onClick={handleResumeDownload}
            >
              <a 
                href="/resume.pdf" 
                download="Ashutosh_Khandai_Resume.pdf"
              >
                <Download className="h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover:scale-110 hover:aurora-glow transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-aurora-primary transition-colors duration-300" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-aurora-accent mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
