'use client';

import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './theme-toggle';
import { cn } from '@/lib/utils';

type HeaderProps = {
  scrollToSection: (id: string) => void;
  activeSection: string;
};

export default function Header({ scrollToSection, activeSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    scrollToSection(hash.substring(1));
    setIsMenuOpen(false);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 z-50 w-full transition-all duration-300",
      "border-b border-border/50 bg-background/80 backdrop-blur-lg h-[var(--header-height)]"
    )}>
      <div className="container mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <Link href="/" className="flex items-center space-x-2 text-foreground">
            <span className="sr-only">Home</span>
          </Link>
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={(e) => handleNavClick(e, link.hash)}
              className={cn(
                "transition-colors hover:text-foreground cursor-pointer",
                activeSection === link.hash.substring(1)
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-end space-x-2">
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-y-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80">
            <div className="relative z-20 grid gap-6 rounded-md bg-background p-4 shadow-md border">
              <nav className="grid grid-flow-row auto-rows-max text-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.hash}
                    href={link.hash}
                    onClick={(e) => handleNavClick(e, link.hash)}
                    className="flex w-full items-center rounded-md p-2 text-base font-medium hover:underline cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
               <div className="border-t pt-4">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
