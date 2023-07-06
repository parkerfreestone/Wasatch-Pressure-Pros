import { Github, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <section id="footer" className="relative bg-white rounded-b-2xl z-90">
      <div className="flex flex-col md:flex-row justify-between py-8 mx-4 lg:mx-16 -mt-16 z-10">
        <p className="text-md md:text-xl border-b md:border-none border-zinc-200 pb-3 md:pb-0 font-bold text-zinc-800">
          © 2023 Wasatch Pressure Pros. All rights reserved.
        </p>
        <div className="flex gap-4 pt-3 md:pt-0">
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="hover:bg-zinc-200 rounded-md transition-all h-8 w-8 flex justify-center items-center"
            href="https://github.com/parkerfreestone/wasatch-pressure-pros"
          >
            <Github />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="hover:bg-zinc-200 rounded-md transition-all h-8 w-8 flex justify-center items-center"
            href="mailto:sebastian@wasatchpressurepros.com"
          >
            <Mail />
          </a>
          <a
            className="hover:bg-zinc-200 rounded-md transition-all h-8 w-8 flex justify-center items-center"
            href="tel:801-675-9064"
          >
            <Phone />
          </a>
        </div>
      </div>
    </section>
  );
};
