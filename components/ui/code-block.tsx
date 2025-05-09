import { useState } from 'react';

interface CodeBlockProps {
  code: string;
}

export function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  
  const lines = code.trim().split('\n');
  const lineCount = lines.length;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg bg-zinc-950 overflow-hidden" dir="ltr">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900">
        <div className="text-xs text-zinc-400" style={{ direction: 'ltr' }}>
          {lineCount} {lineCount === 1 ? 'line' : 'lines'}
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
          style={{ direction: 'ltr' }}
        >
          {copied ? 'Copied!' : 'Copy code'}
        </button>
      </div>
      
      <div className="p-4 overflow-x-auto">
        <pre className="font-mono text-sm leading-6" style={{ direction: 'ltr', textAlign: 'left' }}>
          <code className="grid" style={{ direction: 'ltr' }}>
            {lines.map((line, i) => (
              <div 
                key={i} 
                className="grid grid-cols-[auto,1fr] gap-4"
                style={{ direction: 'ltr' }}
              >
                <span 
                  className="text-zinc-600 select-none text-right w-5"
                  style={{ direction: 'ltr' }}
                >
                  {i + 1}
                </span>
                <span 
                  className="text-zinc-200"
                  style={{ direction: 'ltr', textAlign: 'left', unicodeBidi: 'plaintext' }}
                >
                  {line}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}