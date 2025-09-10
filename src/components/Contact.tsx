// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Linkedin, Instagram, Mail, MapPin, Phone, Send } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';
// import emailjs from '@emailjs/browser';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: '',
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const { toast } = useToast();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // EmailJS configuration - replace these with your actual values
//     const serviceId = 'service_zttexyi';
//     const templateId = 'template_wqnc2bm'; // Replace with your EmailJS template ID
//     const publicKey = 'l6Cx5_Ve7aDKZkzRx'; // Replace with your EmailJS public key
    
//     const templateParams = {
//       from_name: formData.name,
//       from_email: formData.email,
//       subject: formData.subject,
//       message: formData.message,
//       to_email: 'aka.ashutoshkhandai@gmail.com'
//     };

//     try {
//       await emailjs.send(serviceId, templateId, templateParams, publicKey);
//       alert('Message Sent Successfully!');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       alert('Failed to send message');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'aka.ashutoshkhandai@gmail.com',
//       href: 'mailto:aka.ashutoshkhandai@gmail.com',
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'Jajpur, Odisha, India',
//       href: null,
//     },
//   ];

//   const socialLinks = [
//     {
//       icon: Linkedin,
//       label: 'LinkedIn',
//       href: 'https://www.linkedin.com/in/ashutoshkhandai/',
//       color: 'hover:text-blue-500',
//     },
//     {
//       icon: Instagram,
//       label: 'Instagram',
//       href: 'https://www.instagram.com/ashutosh_765',
//       color: 'hover:text-pink-500',
//     },
//     {
//       icon: Mail,
//       label: 'Email',
//       href: 'mailto:aka.ashutoshkhandai@gmail.com',
//       color: 'hover:text-aurora-primary',
//     },
//   ];

//   return (
//     <section id="contact" className="py-20 bg-gradient-hero">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
//             Get In <span className="text-aurora-accent">Touch</span>
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             I'm always excited to discuss new opportunities, collaborations, or just chat about technology.
//             Feel free to reach out!
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//           {/* Contact Form */}
//           <div className="glass-card p-8 rounded-xl">
//             <h3 className="text-2xl font-bold mb-6 text-aurora-primary">Send a Message</h3>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <label htmlFor="name" className="text-sm font-medium text-foreground">
//                     Name
//                   </label>
//                   <Input
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     placeholder="Your full name"
//                     required
//                     className="bg-background/50 border-border focus:border-aurora-primary"
//                   />
//                 </div>
                
//                 <div className="space-y-2">
//                   <label htmlFor="email" className="text-sm font-medium text-foreground">
//                     Email
//                   </label>
//                   <Input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     placeholder="your.email@example.com"
//                     required
//                     className="bg-background/50 border-border focus:border-aurora-primary"
//                   />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="subject" className="text-sm font-medium text-foreground">
//                   Subject
//                 </label>
//                 <Input
//                   id="subject"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleInputChange}
//                   placeholder="What's this about?"
//                   required
//                   className="bg-background/50 border-border focus:border-aurora-primary"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="text-sm font-medium text-foreground">
//                   Message
//                 </label>
//                 <Textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   placeholder="Tell me about your project or just say hello..."
//                   rows={5}
//                   required
//                   className="bg-background/50 border-border focus:border-aurora-primary resize-none"
//                 />
//               </div>

//               <Button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className="btn-aurora w-full py-3 text-lg font-medium"
//               >
//                 {isSubmitting ? (
//                   <div className="flex items-center">
//                     <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                     Sending...
//                   </div>
//                 ) : (
//                   <>
//                     <Send className="h-5 w-5 mr-2" />
//                     Send Message
//                   </>
//                 )}
//               </Button>
//             </form>
//           </div>

//           {/* Contact Information */}
//           <div className="space-y-8">
//             <div className="glass-card p-8 rounded-xl">
//               <h3 className="text-2xl font-bold mb-6 text-aurora-primary">Contact Information</h3>
              
//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-start space-x-4">
//                     <div className="p-3 bg-aurora-primary/10 rounded-full">
//                       <info.icon className="h-5 w-5 text-aurora-primary" />
//                     </div>
//                     <div>
//                       <h4 className="font-semibold text-foreground">{info.label}</h4>
//                       {info.href ? (
//                         <a
//                           href={info.href}
//                           className="text-muted-foreground hover:text-aurora-primary transition-colors"
//                         >
//                           {info.value}
//                         </a>
//                       ) : (
//                         <p className="text-muted-foreground">{info.value}</p>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="glass-card p-8 rounded-xl">
//               <h3 className="text-2xl font-bold mb-6 text-aurora-primary">Connect With Me</h3>
              
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <a
//                     key={index}
//                     href={social.href}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`p-4 glass-card rounded-full hover:scale-110 hover:aurora-glow transition-all duration-300 group ${social.color}`}
//                     aria-label={social.label}
//                   >
//                     <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-current transition-colors duration-300" />
//                   </a>
//                 ))}
//               </div>
              
//               <p className="text-sm text-muted-foreground mt-6">
//                 Follow me on social media for updates on my projects and tech insights!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Linkedin, Instagram, Mail, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '', // Fixed: Changed from 'content' to 'message'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration - replace with your values
    const serviceId = 'service_zttexyi';
    const templateId = 'template_wqnc2bm';
    const publicKey = 'DQFJMc1lP-mFGkdjo';

    // These must match your EmailJS template variables
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'aka.ashutoshkhandai@gmail.com' // Add recipient email
    };

    try {
      console.log('Sending email with params:', templateParams); // Debug log
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent successfully:', result); // Debug log
      
      toast({
        title: 'Message Sent ✅',
        description: 'Thanks for reaching out. I will get back to you soon.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error); // Debug log
      toast({
        title: 'Failed to Send ❌',
        description: error?.text || 'Please check your connection or try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'aka.ashutoshkhandai@gmail.com',
      href: 'mailto:aka.ashutoshkhandai@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jajpur, Odisha, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ashutoshkhandai/',
      color: 'hover:text-blue-500',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/_ashutosh_765_?igsh=azQyejYwdG55a2Ry',
      color: 'hover:text-pink-500',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:aka.ashutoshkhandai@gmail.com',
      color: 'hover:text-aurora-primary',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-glow">
            Get In <span className="text-aurora-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborations, or
            just chat about technology. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-aurora-primary">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                    className="bg-background/50 border-border focus:border-aurora-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border focus:border-aurora-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What's this about?"
                  required
                  className="bg-background/50 border-border focus:border-aurora-primary"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message" // Fixed: Now matches the state property
                  value={formData.message} // Fixed: Now uses the correct property
                  onChange={handleInputChange}
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  required
                  className="bg-background/50 border-border focus:border-aurora-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-aurora w-full py-3 text-lg font-medium"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-aurora-primary">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="p-3 bg-aurora-primary/10 rounded-full">
                      <info.icon className="h-5 w-5 text-aurora-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {info.label}
                      </h4>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-aurora-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6 text-aurora-primary">
                Connect With Me
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass-card rounded-full hover:scale-110 hover:aurora-glow transition-all duration-300 group ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-current transition-colors duration-300" />
                  </a>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                Follow me on social media for updates on my projects and tech
                insights!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;