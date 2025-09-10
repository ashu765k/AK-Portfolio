import { GraduationCap, Award, Code, Database, Globe, Cpu, Server, Monitor } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
  const education = [
    {
      degree: 'B.Tech Computer Science & Engineering',
      institution: 'GIET University',
      period: '2022–26',
      grade: 'Current Grade: A',
      icon: GraduationCap,
      status: 'current',
    },
    {
      degree: '+2 Science',
      institution: 'Hitech Science Higher Secondary School',
      period: '2022',
      grade: 'Grade: A',
      icon: Award,
      status: 'completed',
    },
    {
      degree: '10th Standard',
      institution: 'Panikoili Nodal High School',
      period: '2020',
      grade: 'Grade: B1',
      icon: Award,
      status: 'completed',
    },
  ];

  const certifications = [
    { name: 'Computer Network & Internet Protocol', provider: 'NPTEL' },
    { name: 'The Joy of Computing Using Python', provider: 'NPTEL' },
    { name: 'Python Programming', provider: 'IIT Bombay Spoken Tutorial' },
    { name: 'Python, Java, SQL Basics', provider: 'HackerRank' },
  ];

  const skills = [
    { name: 'Python', icon: Code },
    { name: 'JavaScript/TypeScript', icon: Globe },
    { name: 'React/Node.js', icon: Monitor },
    { name: 'Java', icon: Cpu },
    { name: 'SQL/Database', icon: Database },
    { name: 'HTML/CSS', icon: Server },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-hero relative"
    >
      <div className="container mx-auto px-6">
        {/* Profile Header */}
        <div className="text-center mb-16">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <img
              src={profilePhoto}
              alt="Ashutosh Khandai"
              className="w-full h-full rounded-full object-cover border-4 border-aurora-primary/20 shadow-lg"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-glow">
            Ashutosh Khandai
          </h2>
          <p className="text-xl text-aurora-accent font-medium mb-4">
            Software Developer
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate computer science student with a deep interest in software development,
            artificial intelligence, and creating innovative digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Education Timeline */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-aurora-primary text-center lg:text-left">Education Journey</h3>
            <div className="relative flex-1">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-aurora-primary to-aurora-accent"></div>

              {education.map((edu, index) => (
                <div key={index} className="relative flex items-start mb-6 group">
                  {/* Timeline Node */}
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 group-hover:scale-110 ${
                      edu.status === 'current'
                        ? 'bg-aurora-primary border-aurora-primary aurora-glow'
                        : 'bg-background border-aurora-accent'
                    }`}
                  >
                    <edu.icon
                      className={`h-5 w-5 ${
                        edu.status === 'current' ? 'text-white' : 'text-aurora-accent'
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="ml-6 glass-card p-4 rounded-lg flex-1 group-hover:aurora-glow transition-all duration-300">
                    <h4 className="text-lg font-semibold text-aurora-primary mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-foreground mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{edu.period}</span>
                      <span className="text-aurora-accent font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-aurora-primary text-center lg:text-left">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-4 flex-1">
              {skills.map((skill, index) => (
                <div key={index} className="glass-card p-4 rounded-lg text-center hover:aurora-glow transition-all duration-300">
                  <skill.icon className="h-8 w-8 text-aurora-primary mx-auto mb-2" />
                  <span className="font-medium text-foreground text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-6 text-aurora-primary text-center">
              <Award className="h-6 w-6 mr-2 inline" />
              Certifications & Training
            </h3>
            <div className="grid gap-4 flex-1">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl hover:aurora-glow transition-all duration-300 group cursor-pointer border border-aurora-primary/20"
                >
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-gradient-aurora rounded-full">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-aurora-primary transition-colors mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-aurora-accent font-medium text-sm">{cert.provider}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;