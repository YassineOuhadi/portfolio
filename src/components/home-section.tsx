'use client';

import Image from 'next/image';
import { about, contact, intro } from '@/lib/data';
import { ArrowDown, Mail } from 'lucide-react';
import SectionWrapper from './section-wrapper';
import { Button } from './ui/button';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';
import heroImage from '@/lib/placeholder-images.json';

type HomeSectionProps = {
  scrollToSection: (id: string) => void;
};

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    scrollToSection(id);
  };
  const isMobile = useIsMobile();

  return (
    <SectionWrapper id="home">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
          {intro.name}
        </h1>
        <h2 className="text-lg md:text-xl text-muted-foreground font-semibold mb-6">
          {intro.title}
        </h2>

        <div className="my-8">
          {heroImage.hero?.src && (
            <Image
              src={heroImage.hero.src}
              alt="Yassine Ouhadi"
              width={heroImage.hero.width}
              height={heroImage.hero.height}
              className="rounded-full mx-auto"
              data-ai-hint={heroImage.hero.hint}
              priority
            />
          )}
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
          {about.description1}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={(e) => handleNavClick(e, 'contact')} size="lg">
            <Mail className="mr-2 h-4 w-4" /> Get in Touch
          </Button>
          <Button
            onClick={(e) => handleNavClick(e, 'projects')}
            variant="outline"
            size="lg"
          >
            View My Work <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}
