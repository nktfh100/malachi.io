import { Link } from "@tanstack/react-router";

export const NameBtn = () => {
  return (
    <Link
      to="/"
      className="text-4xl font-black bg-gradient-to-r from-ctp-pink to-ctp-mauve bg-clip-text text-transparent hidden sm:block"
    >
      Malachi
    </Link>
  );
};
