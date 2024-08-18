import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import '../css/markdown.css'
const Markdown = () => {
  const [markdown, setMarkdown] = useState("# Markdown Peview");
  return (
    <section className="markdown">
      <textarea
        className="input"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      ></textarea>
      <article className="result">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </article>
    </section>
  );
};

export default Markdown;
