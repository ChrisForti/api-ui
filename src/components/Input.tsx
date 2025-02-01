import { useState } from "react";

// type Snippet = {
//   title: string;
//   code: string;
// };

export function Input() {
  // what does the api need from me
  // client side validations
  const [title, setTitle] = useState(""); // create the state
  const [code, setCode] = useState("");
  const snippet = { title, code }; // use the state
  console.log("Snippet submitted:", snippet);
  return (
    <>
      <label className="text-md block font-medium text-blue-900">Title:</label>
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
      <label className="text-md block font-medium text-blue-900">Code:</label>
      <textarea
        id="code"
        name="code"
        value={code}
        onChange={(event) => {
          setCode(event.target.value);
        }}
        className="mt-3 w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-lg"
      />
      <button
        type="submit"
        className="mt-4 rounded bg-blue-900 px-4 py-2 font-bold text-white hover:bg-red-500 focus:outline-none"
      >
        Submit
      </button>
    </>
  );
}
