import { Link } from "@tanstack/react-router";
import { Button } from "../ui/button";

export const NavbarItem = (props: {
  to: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Button
        asChild
        className="[&.active]:bg-gradient-to-r from-ctp-mauve to-ctp-pink bg-transparent hover:bg-ctp-surface0 [&.active]:text-ctp-mantle text-ctp-text text-lg px-6 py-4 transition-all duration-100"
      >
        <Link to={props.to}>{props.children}</Link>
      </Button>
    </li>
  );
};
