import { Building, HelpCircle, Home } from "lucide-react";

const services = [
  {
    id: 1,
    Icon: Building,
    title: "Commercial",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum consequatur sunt tenetur unde dolor ex, quisquam, ullam voluptas id perferendis laborum consectetur tempore voluptatum, et possimus. Sint, in minima.",
  },
  {
    id: 2,
    Icon: Home,
    title: "Residential",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum consequatur sunt tenetur unde dolor ex, quisquam, ullam voluptas id perferendis laborum consectetur tempore voluptatum, et possimus. Sint, in minima.",
  },
  {
    id: 3,
    Icon: HelpCircle,
    title: "Custom",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum consequatur sunt tenetur unde dolor ex, quisquam, ullam voluptas id perferendis laborum consectetur tempore voluptatum, et possimus. Sint, in minima.",
  },
];

export const Services = () => {
  return (
    <section id="our services" className="bg-zinc-100 py-24 rounded-b-3xl">
      <p className="text-xl font-bold text-center text-zinc-400">SERVICES</p>
      <h2 className="text-5xl font-bold text-center">Our Services</h2>
      <div className="flex flex-col sm:flex-row gap-16 justify-between mx-16 mt-24 text-center">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-1 px-6 py-12 rounded-xl bg-white"
          >
            <service.Icon size={48} className="text-zinc-500 mx-auto" />
            <h2 className="text-3xl text-zinc-800 font-bold mb-8 mt-8">
              {service.title}
            </h2>
            <p className="text-xl text-zinc-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
