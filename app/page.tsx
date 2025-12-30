// app/page.tsx
"use client";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex flex-col w-full overflow-hidden">
        {/* Hero Section */}
        <section id="home" className="min-h-screen relative flex flex-col justify-center">
          <Hero />
        </section>

        {/* About Section */}
        <section id="about" className="py-24 md:py-32 relative">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 md:py-32 bg-secondary/30 relative">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 md:py-32 relative">
          <Projects />
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32 bg-secondary/30 relative">
          <Experience />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 relative">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}