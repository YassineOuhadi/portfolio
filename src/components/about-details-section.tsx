import { education, experiences, certifications } from '@/lib/data';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import SectionWrapper from './section-wrapper';
import { Badge } from './ui/badge';

export default function AboutDetailsSection() {
  return (
     <SectionWrapper id="about" title="My Journey">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Experience Column */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold flex items-center gap-3">
            <Briefcase className="text-primary w-6 h-6" />
            Work Experience
          </h3>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:opacity-50">
            {experiences.map((exp, index) => (
              <div key={index} className="pl-12 relative">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <p className="text-xs text-muted-foreground">{exp.period}</p>
                <h4 className="font-bold text-lg mt-1">{exp.role}</h4>
                <p className="text-md text-muted-foreground">{exp.company}</p>
                {exp.description && (
                  <p className="mt-2 text-sm text-muted-foreground/80">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Column */}
        <div className="space-y-12">
          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap className="text-primary w-6 h-6" />
              Education
            </h3>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:opacity-50">
              <div className="pl-12 relative">
                <div className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                <p className="text-xs text-muted-foreground">
                  {education.years}
                </p>
                <h4 className="font-bold text-lg mt-1">{education.degree}</h4>
                <p className="text-md text-muted-foreground">
                  {education.school}
                </p>
              </div>
            </div>
          </div>
          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <Award className="text-primary w-6 h-6" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center gap-4 rounded-lg border bg-card/50 p-4 transition-all hover:shadow-primary/10 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="flex-1">
                    <h3 className="font-bold text-card-foreground">
                      {cert.name}
                    </h3>
                    <Badge
                      variant={
                        cert.status === 'Completed' ? 'default' : 'secondary'
                      }
                      className={`mt-1 text-xs ${
                        cert.status === 'Completed'
                          ? 'bg-primary/20 text-primary-foreground border-primary/50'
                          : ''
                      }`}
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
