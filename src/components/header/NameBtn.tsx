import { Link } from "@tanstack/react-router";

export const NameBtn = () => {
  return (
    <button className="text-4xl font-black bg-gradient-to-r from-ctp-pink to-ctp-mauve bg-clip-text text-transparent hidden sm:block">
      <Link to="/">Malachi</Link>
    </button>
  );
};
