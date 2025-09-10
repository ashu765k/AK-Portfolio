import { ExternalLink, Github, Zap, Shield, Smartphone, Brain, Dumbbell, CloudSun, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'eTransitGo',
      description: 'Modern transit management system with real-time tracking and user-friendly interface.',
      technologies: ['React', 'TypeScript', 'Supabase', 'Shadcn UI', 'AWS Amplify'],
      icon: Smartphone,
      color: 'aurora-primary',
      featured: true,
    },
    {
      title: 'EduHive',
      description: 'Currently Working on This Project. Comprehensive e-learning platform with integrated payment processing and course management.',
      technologies: ['ReactNative', 'Razorpay', 'MongoDB', 'TypeScript', 'Node.js'],
      icon: Brain,
      color: 'aurora-accent',
      featured: true,
    },
    {
      title: 'E-Learning System Using Mern Stack',
      description: 'Full-stack educational platform with secure payment integration and user management.',
      technologies: ['MERN Stack', 'Razorpay'],
      icon: Shield,
      color: 'aurora-violet',
      featured: false,
    },
    {
      title: 'JARVIS',
      description: 'AI-powered virtual assistant with facial recognition and natural language processing.',
      technologies: ['Python', 'HTML', 'CSS', 'JavaScript', 'HaarCascade', 'Eel', 'HuggingChat'],
      icon: Brain,
      color: 'aurora-primary',
      featured: true,
    },
    {
      title: 'GYM SYNC',
      description: 'Fitness management system for tracking workouts, memberships, and gym operations.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      icon: Dumbbell,
      color: 'aurora-accent',
      featured: false,
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather application with location-based forecasting and intuitive UI.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'OpenWeatherMap API'],
      icon: CloudSun,
      color: 'aurora-primary',
      featured: false,
    },
    {
      title: 'GUI Based ATM Machine',
      description: 'Desktop ATM simulation with secure transactions and user-friendly interface.',
      technologies: ['Python', 'Tkinter'],
      icon: CreditCard,
      color: 'aurora-accent',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Featured <span className="text-aurora-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical journey through various projects spanning
            web development, AI, and full-stack applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:aurora-glow transition-all duration-500 group hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Icon */}
              <div className="mb-6">
                <div className={`inline-flex p-3 rounded-full bg-${project.color}/10`}>
                  <project.icon className={`h-8 w-8 text-${project.color}`} />
                </div>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-aurora-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-3 py-1 bg-muted rounded-full text-aurora-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-ghost flex-1"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="btn-ghost flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-aurora-primary">Other Notable Projects</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="glass-card p-5 rounded-lg hover:aurora-glow transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center mb-3">
                <project.icon className={`h-5 w-5 text-${project.color} mr-3`} />
                <h4 className="font-semibold text-foreground group-hover:text-aurora-primary transition-colors">
                  {project.title}
                </h4>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs px-2 py-1 bg-muted rounded text-aurora-accent"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <Button
            className="btn-aurora px-8 py-3"
            onClick={() => window.open('https://github.com/ashu765k', '_blank')}
          >
            <Github className="h-5 w-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
