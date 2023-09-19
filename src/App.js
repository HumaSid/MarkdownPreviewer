import React, { useState } from 'react';
import './App.css';
import MarkdownEditor from './MarkdownEditor';
import MarkdownPreview from './MarkdownPreview';

function App() {
  const [markdown, setMarkdown] = useState('');

  const handleInputChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className="App">
      <h1>Markdown Previewer</h1>
      <MarkdownEditor onInputChange={handleInputChange} />
      <MarkdownPreview markdown={markdown} />
    </div>
  );
}

export default App;



