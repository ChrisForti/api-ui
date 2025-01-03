import React, { useState } from "react";

interface Snippet {
  snippetId: string;
  code: string;
}

const SnippetForm: React.FC = () => {
  const [snippet, setSnippet] = useState<Snippet>({ snippetId: "", code: "" });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setSnippet((prevSnippet) => ({ ...prevSnippet, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle snippet submission (e.g., send to API)
    console.log("Snippet submitted:", snippet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Snippet Id:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={snippet.snippetId}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="code">Code:</label>
        <textarea
          id="code"
          name="code"
          value={snippet.code}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SnippetForm;
