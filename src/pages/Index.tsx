import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
// import StarryCursor from '@/components/StarryCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
{/*       <StarryCursor /> */}
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
