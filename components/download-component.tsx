'use client'
import { useState } from 'react';

interface DownloadComponentProps {
  componentName: string;
}

export function DownloadComponent({ componentName }: DownloadComponentProps) {
  const [activeTab, setActiveTab] = useState<'npm' | 'bun'>('npm');
  const [copied, setCopied] = useState(false);
  
  const npmCommand = `npx shadcn@latest add https://${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentName}.json`;
  const bunCommand = `bunx --bun shadcn@latest add https://${process.env.NEXT_PUBLIC_BASE_URL}/r/${componentName}.json`;
  
  const currentCommand = activeTab === 'npm' ? npmCommand : bunCommand;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative rounded-lg bg-zinc-950 overflow-hidden" dir="ltr">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900">
        <div className="flex">
          <button
            onClick={() => setActiveTab('npm')}
            className={`text-xs px-3 py-1 rounded-md mr-2 ${
              activeTab === 'npm' 
                ? 'bg-zinc-800 text-zinc-200' 
                : 'text-zinc-400 hover:text-zinc-300'
            }`}
            style={{ direction: 'ltr' }}
          >
            npm
          </button>
          <button
            onClick={() => setActiveTab('bun')}
            className={`text-xs px-3 py-1 rounded-md ${
              activeTab === 'bun' 
                ? 'bg-zinc-800 text-zinc-200' 
                : 'text-zinc-400 hover:text-zinc-300'
            }`}
            style={{ direction: 'ltr' }}
          >
            bun
          </button>
        </div>
        <button
          onClick={handleCopy}
          className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
          style={{ direction: 'ltr' }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      
      <div className="p-4">
        <pre className="font-mono text-sm leading-6" style={{ direction: 'ltr', textAlign: 'left' }}>
          <code className="text-zinc-200" style={{ direction: 'ltr' }}>
            {currentCommand}
          </code>
        </pre>
      </div>
    </div>
  );
}
