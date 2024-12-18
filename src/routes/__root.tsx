import { Header } from "@/components/header/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: Root,
});

function Root() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-base to-crust">
        <Outlet />
      </main>
    </>
  );
}
