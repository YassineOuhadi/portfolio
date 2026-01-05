import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  id: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ id, title, children, className }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn(
        "min-h-[calc(100vh-var(--header-height))] w-full flex flex-col justify-center p-4 sm:p-8 md:p-12 pb-24",
        className
      )}
    >
      <div className="container mx-auto max-w-5xl flex flex-col items-center justify-center">
        {title && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
          </div>
        )}
        <div className="flex justify-center items-center w-full">
            {children}
        </div>
      </div>
    </section>
  );
}
