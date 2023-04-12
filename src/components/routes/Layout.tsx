import { Navbar } from "../Navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <>
      <div className="bg-black lg:bg-hero-bg text-white">
        <header className="bg-black lg:bg-hero-bg h-[80px]">
          <Navbar />
        </header>

        <main>
          <Outlet />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
