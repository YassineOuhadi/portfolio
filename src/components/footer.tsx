'use client';

import Link from 'next/link';
import { contact } from '@/lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';


export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={cn(
      "w-full border-t border-border/50 bg-background/80"
    )}>
      <div className="container mx-auto flex h-[var(--footer-height)] max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">&copy; {year} Yassine Ouhadi.</p>
        <div className="flex space-x-4">
          <Link href={`mailto:${contact.email}`} className="text-muted-foreground hover:text-primary transition-colors">
            <Mail />
            <span className="sr-only">Email</span>
          </Link>
          <Link href={contact.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
