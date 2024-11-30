import { Navbar } from "./Navbar";
import { NameBtn } from "./NameBtn";

export const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center sm:px-5 md:px-20 lg:px-40 py-3 bg-ctp-mantle border-b-ctp-surface0 border-b">
      <NameBtn />
      <Navbar />
    </header>
  );
};
