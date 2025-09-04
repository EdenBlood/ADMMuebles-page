import { useState } from "preact/hooks";
import type { MueblesGallery } from "../types/index.types";

export function Gallery() {
  const muebles: MueblesGallery[] = [
    {
      // img: "/images/gallery/1.jpg",
      id: 1,
      img: "/muebles/mueble-1.jpg",
      alt: "Mueble 1",
      title: "Mueble 1",
      description: "Descripción del mueble 1",
      category: "Rack TV",
      materials: ["Nebraska", "Nogal", "Blanco"],
    },
    {
      id: 2,
      img: "/muebles/mueble-2.jpg",
      alt: "Mueble 2",
      title: "Mueble 2",
      description: "Descripción del mueble 2",
      category: "Sofá",
      materials: ["Cuero", "Tela"],
    },
    {
      id: 3,
      img: "/muebles/mueble-3.jpg",
      alt: "Mueble 3",
      title: "Mueble 3",
      description: "Descripción del mueble 3",
      category: "Mesa de centro",
      materials: ["Madera", "Vidrio"],
    },
    {
      id: 4,
      img: "/muebles/mueble-4.jpg",
      alt: "Mueble 4",
      title: "Mueble 4",
      description: "Descripción del mueble 4",
      category: "Mesa de centro",
      materials: ["Madera", "Vidrio"],
    },
    {
      id: 5,
      img: "/muebles/mueble-5.jpg",
      alt: "Mueble 5",
      title: "Mueble 5",
      description: "Descripción del mueble 5",
      category: "Mesa de centro",
      materials: ["Madera", "Vidrio"],
    },
    {
      id: 6,
      img: "/muebles/mueble-6.jpg",
      alt: "Mueble 6",
      title: "Mueble 6",
      description: "Descripción del mueble 6",
      category: "Mesa de centro",
      materials: ["Madera", "Vidrio"],
    },
  ];

  const [mueblesFiltered, setMueblesFiltered] =
    useState<MueblesGallery[]>(muebles);
  const categories = muebles.reduce((acc: string[], mueble) => {
    if (!acc.includes(mueble.category)) acc.push(mueble.category);
    return acc;
  }, []);

  const handleFilter = (e: Event) => {
    const target = e.target as HTMLSelectElement;
    const category = target.value;
    setMueblesFiltered(
      category
        ? muebles.filter((mueble) => mueble.category === category)
        : muebles
    );
  };
  return (
    <div class="max-w-7xl mx-auto p-4">
      <section class="flex flex-col">
        <h1 class="text-5xl font-normal mb-2 text-red-900 text-center">
          Galería de muebles que realizamos.
        </h1>
        <div class="flex justify-center gap-4">
          <label for="mueble" class="text-md font-light text-gray-600">
            Filtrar por mueble:
          </label>
          <select name="mueble" id="mueble" onChange={handleFilter}>
            <option value="">Todos</option>
            {categories.map((category) => (
              <option value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div class="grid grid-cols-4 gap-4 py-4">
          {mueblesFiltered.map((mueble) => (
            <article
              key={mueble.id}
              class="w-full h-70 bg-white shadow-md transition-all duration-500 
              opacity-0 animate-fadeIn hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={mueble.img}
                alt={mueble.alt}
                class="w-full h-50 object-cover object-center"
              />
              <div class="p-2">
                <h3 class="text-lg font-normal mt-2 text-red-900">
                  {mueble.title}
                </h3>
                <p class="text-sm font-light text-gray-600">
                  {mueble.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
