import { ReactNode } from 'react';
import { CodeBlock } from './code-block';

interface SectionLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  codeExample?: string;
  description?: string | ReactNode;
}

export function SectionLayout({
  title,
  subtitle = '',
  children,
  codeExample,
  description,
}: SectionLayoutProps) {
  return (
    <section className="py-8">
      <h2 className="section-title">{title}</h2>
      
      <div className="card-body">
        {subtitle && (
          <h3 className="text-lg font-semibold mb-4">{subtitle}</h3>
        )}
        
        <div className="mb-6">
          {children}
        </div>
        
        {description && (
          <>
            <h3 className="text-lg font-semibold mb-4 mt-8">استخدامات {title}</h3>
            <div className="flex flex-col gap-4">
              {typeof description === 'string' ? (
                <p className="text-sm">{description}</p>
              ) : (
                description
              )}
            </div>
          </>
        )}
        
        {codeExample && (
          <div dir="ltr" className="mt-6">
            <CodeBlock code={codeExample} />
          </div>
        )}
      </div>
    </section>
  );
} 