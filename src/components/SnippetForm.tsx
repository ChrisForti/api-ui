import React, { useState } from "react";

type Snippet = {
  title: string;
  code: string;
};

export function SnippetForm() {
  const [title, setTitle] = useState(""); // create the state
  const [code, setCode] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // what does the api need from me
    // client side validations
    const snippet = { title, code }; // use the state
    console.log("Snippet submitted:", snippet);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="code">Code:</label>
        <textarea
          id="code"
          name="code"
          value={code}
          onChange={(event) => {
            setCode(event.target.value);
          }}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
