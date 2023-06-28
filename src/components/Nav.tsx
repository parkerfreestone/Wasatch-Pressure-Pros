import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Home,
  Hammer,
  Info,
  MessageSquare,
} from "lucide-react";

const navItems = [
  { name: "Home", Icon: Home },
  { name: "Our Services", Icon: Hammer },
  { name: "About Us", Icon: Info },
  { name: "FAQs", Icon: MessageSquare },
];

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    setIsScrolled(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);

  const renderNavItem = (item: Record<string, any>, index: number) => (
    <a
      key={index}
      className={`${
        isScrolled ? "text-zinc-700" : "text-zinc-100"
      } hover:text-zinc-400 text-xl`}
      href={`#${item.name.toLowerCase()}`}
    >
      {item.name}
    </a>
  );

  return (
    <nav
      className={`${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent text-zinc-100"
      } fixed z-50 transition-all duration-300 px-16 rounded-xl m-5`}
      style={{ width: "calc(100vw - 2.5rem)" }}
    >
      <div
        className={` ${
          isScrolled ? "border-zinc-800" : "border-zinc-100"
        } flex justify-between items-center gap-12 py-6`}
      >
        <div className="font-bold text-xl">Wasatch Pressure Pros</div>
        <div className="hidden sm:flex gap-6 items-center h-full">
          {navItems.map(renderNavItem)}
        </div>
        <div className="flex gap-5 sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className="hidden sm:flex gap-5 flex-1 justify-end items-center">
          <div
            className={`${
              isScrolled
                ? "border-zinc-800 hover:bg-zinc-800  hover:text-white"
                : "border-zinc-100 hover:bg-zinc-100  hover:text-zinc-800"
            } flex gap-2 border  px-4 py-2 rounded-full hover:px-6 transition-all `}
          >
            <a href="#">CONTACT US</a>
            <ArrowUpRight />
          </div>
          <a
            href="mailto:parkerfreestone@gmail.com"
            className={`${
              isScrolled
                ? "border-zinc-800 hover:bg-zinc-800  hover:text-white"
                : "border-zinc-100 hover:bg-zinc-100  hover:text-zinc-800"
            } flex gap-2 border p-2 rounded-full hover:px-4 transition-all `}
          >
            <Mail />
          </a>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "slide-in" : "slide-out"
        } sm:hidden flex flex-col justify-start items-start h-screen w-screen bg-white fixed top-0 left-0 z-50 gap-8 text-2xl p-8`}
      >
        <button
          className="absolute top-0 right-0 m-4"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
        {navItems.map(renderNavItem)}
        <div className="flex gap-2 border border-zinc-800 px-4 py-2 rounded-full hover:px-6 transition-all hover:bg-zinc-800 hover:text-white">
          <a href="#">CONTACT US</a>
          <ArrowUpRight />
        </div>
        <a
          href="mailto:parkerfreestone@gmail.com"
          className="p-2 border border-zinc-800 rounded-full transition-all hover:bg-zinc-800 hover:text-white"
        >
          <Mail />
        </a>
      </div>
    </nav>
  );
};
