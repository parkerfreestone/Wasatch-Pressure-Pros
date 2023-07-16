import { Building, HelpCircle, Home } from "lucide-react";

const services = [
  {
    id: 1,
    Icon: Building,
    title: "Commercial",
    description:
      "Our commercial services cover dumpster pad cleaning, construction equipment maintenance, fleet washing, and business window cleaning. We also provide thorough cleaning for business entrances and concrete surfaces to maintain a professional appearance for your business.",
  },
  {
    id: 2,
    Icon: Home,
    title: "Residential",
    description:
      "Wasatch Pressure Pros offers comprehensive residential cleaning services. From house washing to driveway, patio, and concrete cleaning, we handle it all. Our team also cleans decks, fences, parking lots, gutters, and windows to enhance the curb appeal of your home.",
  },
  {
    id: 3,
    Icon: HelpCircle,
    title: "Custom",
    description:
      "For unique cleaning needs, Wasatch Pressure Pros is ready to assist. If your requirements fall outside our standard services, don't hesitate to contact us. We will create a tailored cleaning plan to meet your specific needs.",
  },
];

export const Services = () => {
  return (
    <section id="ourservices" className="bg-zinc-100 py-24 rounded-b-3xl">
      <span data-aos="fade-up" data-aos-delay="100">
        <p className="text-xl font-bold text-center text-zinc-400">SERVICES</p>
        <h2 className="text-5xl font-bold text-center">Our Services</h2>
      </span>
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 justify-between mx-4 md:mx-16 mt-24 text-center">
        {services.map((service, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={200 * index}
            key={service.id}
            className="flex-1 px-6 py-12 rounded-xl bg-white"
          >
            <service.Icon size={48} className="text-zinc-500 mx-auto" />
            <h3 className="text-3xl text-zinc-800 font-bold mb-8 mt-8">
              {service.title}
            </h3>
            <p className="text-xl text-zinc-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
