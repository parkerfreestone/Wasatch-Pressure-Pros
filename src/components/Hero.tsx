import { ArrowRight, ArrowUpRight, Droplet } from "lucide-react";
import BannerVideo from "../assets/power-washing-banner.mp4";

export const Hero = () => {
  return (
    <section
      id="#home"
      className="relative h-calc flex items-center justify-center text-center"
      style={{ height: "calc(100vh - 10rem)" }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full rounded-b-2xl object-cover z-10"
        src={BannerVideo}
        autoPlay
        muted
        loop
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-20 rounded-b-2xl" />
      <div className="relative z-30 container mx-auto px-6 sm:px-8 lg:px-10 xl:px-20">
        <p className="flex items-center gap-2 text-xl text-white font-bold justify-center">
          <div>
            <Droplet size={16} />
          </div>
          Precision in Power Washing
        </p>
        <h1 className="text-8xl text-white font-extrabold mt-12">
          Professional <br /> Power Washing Services
        </h1>
        <p className="mt-4 text-xl text-white">
          Experience the transformation with our expert power washing services.
          We deliver superior quality, enhancing the beauty and value of your
          property.
        </p>
        <div className="flex gap-4 mt-24 justify-center">
          <a
            href="#"
            className="px-8 py-3 bg-teal-500 rounded-full flex gap-2 font-bold text-white"
          >
            CONTACT US
            <ArrowUpRight />
          </a>
          <a
            href="#"
            className="px-8 py-3 rounded-full border border-white flex gap-2 font-bold text-white"
          >
            LEARN MORE
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
