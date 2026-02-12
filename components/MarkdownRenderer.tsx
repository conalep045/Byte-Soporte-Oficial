import React from 'react';

interface MarkdownRendererProps {
  content: string;
  isUser: boolean;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, isUser }) => {
  // A very simple parser to handle code blocks and basic formatting
  // to avoid heavy dependencies while keeping the UI clean.
  
  const renderContent = () => {
    const parts = content.split(/(```[\s\S]*?```)/g);

    return parts.map((part, index) => {
      if (part.startsWith('```') && part.endsWith('```')) {
        const codeContent = part.replace(/^```\w*\n?|```$/g, '');
        return (
          <div key={index} className="my-3 rounded-md overflow-hidden border border-slate-700 bg-slate-900 shadow-sm">
            <div className="bg-slate-800 px-3 py-1 text-xs text-slate-400 font-mono border-b border-slate-700 flex justify-between items-center">
              <span>TERMINAL / CODE</span>
            </div>
            <pre className="p-3 overflow-x-auto text-sm font-mono text-emerald-400">
              <code>{codeContent}</code>
            </pre>
          </div>
        );
      }

      // Process inline bolding and line breaks
      return (
        <p key={index} className={`whitespace-pre-wrap leading-relaxed ${index > 0 ? 'mt-2' : ''}`}>
          {part.split(/(\*\*.*?\*\*|`.*?`)/g).map((subPart, subIndex) => {
            if (subPart.startsWith('**') && subPart.endsWith('**')) {
              return <strong key={subIndex} className="font-bold text-white">{subPart.slice(2, -2)}</strong>;
            }
            if (subPart.startsWith('`') && subPart.endsWith('`')) {
              return <code key={subIndex} className="bg-slate-700/50 px-1 py-0.5 rounded text-sm font-mono text-sky-300">{subPart.slice(1, -1)}</code>;
            }
            return subPart;
          })}
        </p>
      );
    });
  };

  return <div className={`text-sm md:text-base ${isUser ? 'text-white' : 'text-slate-200'}`}>{renderContent()}</div>;
};

export default MarkdownRenderer;