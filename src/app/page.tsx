"use client";

import Hero from '@/components/Sections/Hero';
import Projects from '@/components/Sections/Projects';
import About from '@/components/Sections/About';
import Contact from '@/components/Sections/Contact';
import Nav from '@/components/Sections/Nav';
import Footer from '@/components/Sections/Footer';

export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full font-sans text-black">
      <Nav />
      <main className="flex flex-col gap-0">
        {/* Hero */}
        <Hero />

        {/* Featured Work */}
        <section id="projects" className="bg-white">
          <Projects />
        </section>

        {/* About */}
        <About />

        {/* Contact */}
        <section id="contact" className="bg-white">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}