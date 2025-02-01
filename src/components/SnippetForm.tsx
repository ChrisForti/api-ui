import { Input } from "./Input";

export function SnippetForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className="ml-4 pt-4" onSubmit={handleSubmit}>
      <div className="pt-5">
        <Input />
      </div>
    </form>
  );
}
