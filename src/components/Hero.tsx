import { ArrowRight, Droplet, Phone } from "lucide-react";
import BannerVideo from "../assets/power-washing-banner.mp4";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <video
        className="absolute top-0 left-0 w-full h-full rounded-b-2xl object-cover z-10"
        src={BannerVideo}
        autoPlay
        muted
        loop
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-20 rounded-b-2xl" />
      <div className="relative z-30 container mx-4 sm:mx-8 md:mx-16 lg:mx-32 xl:px-20">
        <p
          data-aos="fade-up"
          className="items-center gap-2 text-xl text-white font-bold justify-center hidden xl:flex"
        >
          <Droplet size={16} />
          Precision in Power Washing
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-8xl text-white font-extrabold mt-12"
        >
          Professional <br /> Power Washing Services
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="mt-4 text-xl text-white"
        >
          Experience the transformation with our expert power washing services.
          We deliver superior quality, enhancing the beauty and value of your
          property.
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="flex flex-col sm:flex-row gap-4 mt-24 justify-center"
        >
          <a
            href="tel:801-675-9064"
            className="px-8 py-3 rounded-full bg-teal-700 flex gap-2 font-bold text-white mt-4 sm:mt-0 justify-center sm:justify-start hover:px-10 transition-all hover:opacity-90"
          >
            GET AN ESTIMATE
            <Phone />
          </a>
          <a
            href="#aboutus"
            className="px-8 py-3 rounded-full border border-white flex gap-2 font-bold text-white mt-4 sm:mt-0 justify-center sm:justify-start hover:px-10 hover:bg-zinc-100 hover:text-zinc-800 transition-all"
          >
            LEARN MORE
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};
