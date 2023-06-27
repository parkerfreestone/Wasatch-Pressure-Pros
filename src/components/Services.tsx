import { Building, HelpCircle, Home } from "lucide-react";

export const Services = () => {
  return (
    <div className="flex gap-6 justify-between mx-16 mt-12">
      <div className="flex-1 p-6 border border-zinc-800 rounded-xl">
        <Building />
        <h2 className="text-3xl text-zinc-850 font-bold mb-8 mt-4">
          Commercial
        </h2>
        <p className="text-xl text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          debitis ratione a quis in. Cupiditate architecto ea, sunt impedit quis
          laboriosam itaque sint, explicabo consectetur totam distinctio,
          voluptatibus quae corporis!
        </p>
      </div>
      <div className="flex-1 p-6 border border-zinc-800 rounded-xl">
        <Home />
        <h2 className="text-3xl text-zinc-850 font-bold mb-8 mt-4">
          Residential
        </h2>
        <p className="text-xl text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          debitis ratione a quis in. Cupiditate architecto ea, sunt impedit quis
          laboriosam itaque sint, explicabo consectetur totam distinctio,
          voluptatibus quae corporis!
        </p>
      </div>
      <div className="flex-1 p-6 border border-zinc-800 rounded-xl">
        <HelpCircle />
        <h2 className="text-3xl text-zinc-850 font-bold mb-8 mt-4">Custom</h2>
        <p className="text-xl text-zinc-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          debitis ratione a quis in. Cupiditate architecto ea, sunt impedit quis
          laboriosam itaque sint, explicabo consectetur totam distinctio,
          voluptatibus quae corporis!
        </p>
      </div>
    </div>
  );
};
