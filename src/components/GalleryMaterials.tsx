import { useMemo, useState } from "preact/hooks";
import type { Materials } from "../types/index.types";
import { materials } from "../storage";

export function GalleryMaterials() {
  const [showMore, setShowMore] = useState(false);
  const [materialsFiltered, setMaterialsFiltered] =
    useState<Materials[]>(materials);

  const colors = materials.reduce((acc: string[], material) => {
    if (material.color) {
      for (const color of material.color) {
        if (!acc.includes(color)) acc.push(color);
      }
    }
    return acc;
  }, []);

  const visible = useMemo(
    () => (showMore ? materialsFiltered : materialsFiltered.slice(0, 8)),
    [showMore, materialsFiltered]
  );

  function handleFilter(e: Event) {
    const target = e.target as HTMLSelectElement;
    const color = target.value;
    setMaterialsFiltered(
      color
        ? materials.filter((material) => material.color.includes(color))
        : materials
    );
  }

  return (
    <div class="max-w-7xl mx-auto p-4 my-4">
      <section class="flex flex-col gap-2">
        <h1 class="text-5xl font-normal mb-6 text-red-900 text-center">
          Materiales que utilizamos
        </h1>

        <div class="flex justify-center gap-4">
          <label for="materials" class="text-md font-light text-gray-600">
            Filtrar por Color:
          </label>
          <select name="materials" id="materials" onChange={handleFilter}>
            <option value="">Todos</option>
            {colors.map((color) => (
              <option value={color}>{color}</option>
            ))}
          </select>
        </div>

        <div class="grid grid-cols-4 gap-4 py-4">
          {visible.map((material) => (
            <article
              class="w-full h-70 bg-white shadow-md transition-all duration-500 
          opacity-0 animate-fadeIn hover:shadow-lg hover:-translate-y-1"
            >
              <img
                src={material.img}
                alt={material.alt}
                class="w-full h-50 object-cover object-center"
                loading="lazy"
              />
              <div class="p-2">
                <h3 class="text-lg font-normal mt-2 text-red-900">
                  {material.title}
                </h3>
                <p class="text-sm font-light text-gray-600">
                  {material.color.join(", ")}
                </p>
              </div>
            </article>
          ))}
        </div>
        <button
          class="bg-red-900 cursor-pointer text-white px-4 py-2 rounded mt-4 hover:bg-red-800 block mx-auto transition-colors duration-300"
          onClick={() => setShowMore(!showMore)}
        >
          Mostrar {showMore ? "menos" : "más"}
        </button>
      </section>
    </div>
  );
}
