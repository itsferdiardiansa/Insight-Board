import React, { useState } from 'react';
import { FiGithub, FiCopy } from 'react-icons/fi';

interface DocInfoProps {
  importStatement: string;
  sourcePath: string;
}

export const DocInfo: React.FC<DocInfoProps> = ({ importStatement, sourcePath }) => {
  const [importCopied, setImportCopied] = useState(false);
  const githubRepoUrl = 'https://github.com/itsferdiardiansa/Insight-Board/tree/main/src'

  const copyToClipboard = (text: string, setCopied: (copied: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="my-space-md!">
      <div className="flex items-center justify-between py-space-sm bg-muted">
        <div className="flex items-center gap-space-md">
          <span className="text-xs! text-subtle">Import</span>
          <code className="text-sm text-default cursor-pointer hover:bg-inverse-hovered/60 py-space-xs px-space-sm rounded-md">{importStatement}</code>
        </div>
        <button
          className="cursor-pointer"
          onClick={() => copyToClipboard(importStatement, setImportCopied)}
          aria-label="Copy import statement"
        >
          {importCopied ? <span className="text-xs! text-success">Copied!</span> : <FiCopy className="text-subtle" />}
        </button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-space-md">
          <span className="text-xs! text-subtle">Source</span>
          <a 
            href={`${githubRepoUrl}/${sourcePath}`}
            className="flex items-center gap-space-sm hover:bg-inverse-hovered/60 py-space-xs px-space-sm rounded-md"
            target="_blank"
          > 
            <FiGithub className="text-gray-500" />
            <span className="text-sm text-default">{sourcePath}</span>
          </a>
        </div>
      </div>
    </div>
  );
};