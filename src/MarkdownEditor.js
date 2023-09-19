import React, { useState } from 'react';

function MarkdownEditor({ onInputChange }) {
  const [markdown, setMarkdown] = useState('');

  const handleChange = (e) => {
    setMarkdown(e.target.value);
    onInputChange(e.target.value);
  };

  return (
    <div className="markdown-editor">
      <textarea
        value={markdown}
        onChange={handleChange}
        placeholder="Enter Markdown here..."
      />
    </div>
  );
}

export default MarkdownEditor;
