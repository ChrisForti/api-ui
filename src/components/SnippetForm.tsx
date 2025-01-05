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
    <form className="ml-4 pt-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          className="mt-3 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label
          htmlFor="code"
          className="block text-sm font-medium text-gray-700"
        >
          Code:
        </label>
        <textarea
          id="code"
          name="code"
          value={code}
          onChange={(event) => {
            setCode(event.target.value);
          }}
          className="mt-3 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-lg"
        />
      </div>
      <div className="pt-5">
        <button
          type="submit"
          className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-slate-400 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
