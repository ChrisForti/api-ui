type HeaderProps = {
  setHeaderNavigation: React.Dispatch<React.SetStateAction<number>>;
};

export function Header({ setHeaderNavigation }: HeaderProps) {
  return (
    <div className="bg-slate-200 p-6">
      <header className="text-center text-7xl text-blue-900">
        Express Snippet Box
      </header>
      <ul>
        <li
          className="pb-1 text-xl text-teal-600 sm:text-right"
          onClick={() => {
            setHeaderNavigation(0);
          }}
        >
          <a href="/Mainpage">Home</a>
        </li>
      </ul>
    </div>
  );
}
