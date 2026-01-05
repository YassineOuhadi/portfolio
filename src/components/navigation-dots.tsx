'use client';

import { cn } from '@/lib/utils';

type NavigationDotsProps = {
  activeSection: string;
  navLinks: { name: string; hash: string }[];
  scrollToSection: (id: string) => void;
};

export default function NavigationDots({ activeSection, navLinks, scrollToSection }: NavigationDotsProps) {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    scrollToSection(hash.substring(1));
  };
  
  return (
    <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 z-50">
      <ul className="flex flex-col items-center gap-y-4">
        {navLinks.map((link) => (
          <li key={link.hash}>
            <a
              href={link.hash}
              onClick={(e) => handleNavClick(e, link.hash)}
              className="group flex items-center justify-center p-2"
              aria-label={`Go to ${link.name} section`}
            >
              <span className="absolute left-full ml-3 hidden rounded-md bg-background/80 px-2 py-1 text-xs text-center w-20 group-hover:block backdrop-blur-sm">
                {link.name}
              </span>
              <div
                className={cn(
                  'h-2 w-2 rounded-full bg-muted transition-all duration-300',
                  activeSection === link.hash.substring(1)
                    ? 'h-3 w-3 bg-primary'
                    : 'group-hover:bg-primary/70'
                )}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
