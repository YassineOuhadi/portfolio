import { skills } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import SectionWrapper from './section-wrapper';

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Technical Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skillCategory) => (
          <Card
            key={skillCategory.category}
            className="bg-card/50 border-border/30"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary">
                {skillCategory.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillCategory.list.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="font-mono text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
