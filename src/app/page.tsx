'use client';

import { useEffect, useState, useRef } from 'react';
import Header from '@/components/header';
import HomeSection from '@/components/home-section';
import AboutDetailsSection from '@/components/about-details-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';
import { navLinks } from '@/lib/data';
import Footer from '@/components/footer';
import NavigationDots from '@/components/navigation-dots';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, threshold: 0.25 } // Adjust threshold as needed
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => {
      sectionRefs.current[section.id] = section as HTMLElement;
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        const currentSection = sectionRefs.current[section.id];
        if (currentSection) {
          observer.unobserve(currentSection);
        }
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = sectionRefs.current[id];
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} activeSection={activeSection} />
      <NavigationDots activeSection={activeSection} navLinks={navLinks} scrollToSection={scrollToSection} />
      <main id="main-content" className="flex flex-col">
        <HomeSection scrollToSection={scrollToSection} />
        <AboutDetailsSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
