import { useState } from "react";
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

  return (
    <nav className="mx-4 sm:mx-16 py-5 text-zinc-800">
      <div className="flex justify-between items-center border-zinc-800 pb-4 border-b">
        <div className="font-bold text-2xl">Wasatch Power Pros</div>
        <div className="flex gap-5 sm:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        <div className="hidden sm:flex gap-5">
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
        {navItems.map((item) => (
          <a
            className="flex items-center gap-2 text-zinc-700 hover:text-black"
            href={`#${item.name.toLowerCase()}`}
          >
            <item.Icon />
            {item.name.toUpperCase()}
          </a>
        ))}
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
      <div className="hidden sm:flex gap-6 mt-2">
        {navItems.map((item) => (
          <a
            className="text-lg text-zinc-700 hover:text-black"
            href={`#${item.name.toLowerCase()}`}
          >
            {item.name.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  );
};
