import { NavbarItem } from "./NavbarItem";

export const Navbar = () => {
  return (
    <nav className="flex-1 sm:flex-none">
      <ul className="flex flex-row gap-5 md:gap-2 justify-center md:justify-start">
        <NavbarItem to="/">About</NavbarItem>
        <NavbarItem to="/projects">Projects</NavbarItem>
      </ul>
    </nav>
  );
};
