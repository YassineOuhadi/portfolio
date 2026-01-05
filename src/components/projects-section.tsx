import { projects } from '@/lib/data';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Github } from 'lucide-react';
import SectionWrapper from './section-wrapper';

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group relative flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:shadow-primary/10 hover:shadow-2xl hover:-translate-y-2"
          >
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 h-20">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </div>
            <div className="p-6 pt-0 mt-auto">
               <Link href={project.source} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline flex items-center gap-2">
                  <Github className="h-4 w-4" /> View Source
                  <span className="absolute inset-0" />
               </Link>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
