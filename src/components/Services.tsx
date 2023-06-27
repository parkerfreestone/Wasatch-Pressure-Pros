import { Building, HelpCircle, Home } from "lucide-react";

export const Services = () => {
  return (
    <section className="relative bg-zinc-300 rounded-b-3xl -mt-24 pt-24 pb-12 -z-10">
      <div className="flex gap-6 justify-between mx-16 mt-12">
        <div className="flex-1 p-6 border border-zinc-800 rounded-xl">
          <Building className="text-zinc-8000" />
          <h2 className="text-3xl text-zinc-800 font-bold mb-8 mt-4">
            Commercial
          </h2>
          <p className="text-xl text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            debitis ratione a quis in. Cupiditate architecto ea, sunt impedit
            quis laboriosam itaque sint, explicabo consectetur totam distinctio,
            voluptatibus quae corporis!
          </p>
        </div>
        <div className="flex-1 p-6 border border-zinc-800 rounded-xl">
          <Home className="text-zinc-8000" />
          <h2 className="text-3xl text-zinc-800 font-bold mb-8 mt-4">
            Residential
          </h2>
          <p className="text-xl text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            debitis ratione a quis in. Cupiditate architecto ea, sunt impedit
            quis laboriosam itaque sint, explicabo consectetur totam distinctio,
            voluptatibus quae corporis!
          </p>
        </div>
        <div className="flex-1 p-6 border border-zinc-800 rounded-xl">
          <HelpCircle className="text-zinc-8000" />
          <h2 className="text-3xl text-zinc-800 font-bold mb-8 mt-4">Custom</h2>
          <p className="text-xl text-zinc-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            debitis ratione a quis in. Cupiditate architecto ea, sunt impedit
            quis laboriosam itaque sint, explicabo consectetur totam distinctio,
            voluptatibus quae corporis!
          </p>
        </div>
      </div>
    </section>
  );
};
