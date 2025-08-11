'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import Works from '@/components/Works';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Education />
      <Services />
      <Works />
      <Contact />
      <Footer />
    </main>
  );
}