'use client';

import { useRef } from 'react';
import { contact } from '@/lib/data';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import SectionWrapper from './section-wrapper';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // For now, we just show a success message as server actions are not supported in static export.
    toast({
      title: 'Success!',
      description: 'Your message has been sent successfully!',
      variant: 'default',
    });

    formRef.current?.reset();
  };
  
  return (
    <SectionWrapper id="contact" title={contact.title}>
      <div className="max-w-xl mx-auto text-center">
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
          {contact.description}
        </p>
        <div className="mx-auto w-full max-w-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <Input name="name" placeholder="Your Name" required className="bg-secondary" />
            <Input name="email" type="email" placeholder="Your Email" required className="bg-secondary"/>
            <Textarea name="message" placeholder="Your Message" required rows={5} className="bg-secondary" />
            <Button type="submit" className="w-full" size="lg">
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
