import React from 'react';
import ReactMarkdown from 'react-markdown';

function MarkdownPreview({ markdown }) {
  return (
    <div className="markdown-preview">
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPreview;
