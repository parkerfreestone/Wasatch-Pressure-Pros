import { ArrowRight, ArrowUpRight, Droplet } from "lucide-react";
import BannerVideo from "../assets/power-washing-banner.mp4";

export const Hero = () => {
  return (
    <section className="relative mx-4 sm:mx-16 overflow-hidden mt-4">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
        src={BannerVideo}
        autoPlay
        muted
        loop
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-lg" />
      <div className="relative z-10mx-auto px-6 sm:px-8 lg:px-10 xl:px-20 py-12 sm:py-52">
        <p className="flex items-center gap-2 text-base sm:text-xl text-white font-bold">
          <div>
            <Droplet size={16} />
          </div>
          Precision in Power Washing
        </p>
        <h1 className="text-4xl sm:text-8xl text-white font-extrabold mt-6 sm:mt-12">
          <span className="inline sm:block">Professional </span>
          <span>Power Washing Services</span>
        </h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-xl text-white">
          <span className="inline sm:block">
            Experience the transformation with our expert power washing
            services.
          </span>
          <span>We deliver superior quality,</span> enhancing the beauty and
          value of your property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-24">
          <a
            href="#"
            className="px-4 sm:px-8 py-2 sm:py-3 bg-teal-500 rounded-full flex items-center justify-center gap-2 font-bold text-white"
          >
            CONTACT US
            <ArrowUpRight />
          </a>
          <a
            href="#"
            className="px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-white flex items-center justify-center gap-2 font-bold text-white"
          >
            LEARN MORE
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
