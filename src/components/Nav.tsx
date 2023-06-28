import { useEffect, useState } from "react";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";

// THIS USED TO HAVE ICONS
const navItems = [
  { name: "Home" },
  { name: "Our Services" },
  { name: "About Us" },
  { name: "FAQs" },
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
        isScrolled ? "text-zinc-700" : "text-zinc-800 lg:text-zinc-100"
      } hover:text-zinc-400 text-4xl lg:text-xl`}
      href={`#${item.name.toLowerCase().split(" ").join("")}`}
    >
      {item.name}
    </a>
  );

  return (
    <nav
      className={`${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent text-zinc-100"
      } fixed z-50 transition-all duration-300 px-4 sm:px-16 rounded-xl mx-4 md:mx-16 mt-5 w-[calc(100%-2rem)] md:w-[calc(100%-8rem)]`}
    >
      <div
        className={` ${
          isScrolled ? "border-zinc-800" : "border-zinc-100"
        } flex justify-between items-center md:gap-12 py-6`}
      >
        <div className="font-bold text-xl">Wasatch Pressure Pros</div>
        <div className="hidden xl:flex gap-6 items-center h-full">
          {navItems.map(renderNavItem)}
        </div>
        <div className="flex gap-5 xl:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className="hidden xl:flex gap-5 flex-1 justify-end items-center">
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
          isOpen ? "fixed" : "hidden"
        } xl:hidden flex flex-col justify-start items-start h-screen w-screen bg-white fixed top-0 left-0 z-50 gap-8 text-2xl p-8`}
      >
        <button
          className="absolute top-0 right-0 m-4 text-zinc-800"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
        <div className="flex gap-4 justify-between w-full mt-10">
          <div className="flex flex-1 gap-2 border border-zinc-800 px-4 py-2 rounded-full hover:px-6 transition-all text-zinc-800">
            <a href="#">Contact Us</a>
            <ArrowUpRight />
          </div>
          <a
            href="mailto:parkerfreestone@gmail.com"
            className="flex justify-center items-center p-2 h-12 w-12 border border-zinc-800 rounded-full transition-all hover:bg-zinc-800 text-zinc-800 hover:text-zinc-100"
          >
            <Mail />
          </a>
        </div>
        {navItems.map(renderNavItem)}
      </div>
    </nav>
  );
};
