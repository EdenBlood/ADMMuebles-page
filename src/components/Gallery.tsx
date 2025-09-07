import { useEffect, useMemo, useState } from "preact/hooks";
import type { MueblesGallery } from "../types/index.types";
import { muebles } from "../storage";

export function Gallery() {
  const [mueblesFiltered, setMueblesFiltered] =
    useState<MueblesGallery[]>(muebles);
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  //* Comprobamos el tamaño de la pantalla
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 900);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const categories = muebles.reduce((acc: string[], mueble) => {
    if (!acc.includes(mueble.category)) acc.push(mueble.category);
    return acc;
  }, []);

  const visible = useMemo(
    () =>
      showMore ? mueblesFiltered : mueblesFiltered.slice(0, isMobile ? 6 : 8),
    [showMore, mueblesFiltered, isMobile]
  );

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
    <div class="max-w-7xl mx-auto p-2 md:p-4 my-4">
      <section class="flex flex-col md:gap-2">
        <h1 class="text-4xl md:text-5xl font-normal mb-4 md:mb-6 text-red-900 text-center">
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

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {visible.map((mueble) => (
            <a key={mueble.id} href={`/muebles/${mueble.id}`} class="group">
              <article
                class="w-full h-70 bg-white shadow-md transition-all duration-500 
              opacity-0 animate-fadeIn hover:shadow-lg hover:-translate-y-1 "
              >
                <div class="overflow-hidden h-50">
                  <img
                    src={mueble.img}
                    alt={mueble.alt}
                    class="w-full h-50 object-cover object-center scale-100 group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div class="p-2">
                  <h3
                    title={mueble.title}
                    class="text-lg font-normal mt-2 text-red-900 group-hover:text-red-700 transition-colors duration-300 line-clamp-1"
                  >
                    {mueble.title}
                  </h3>
                  <p class="text-sm font-light text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                    {mueble.description}
                  </p>
                </div>
              </article>
            </a>
          ))}
        </div>
        <button
          class="bg-red-900 cursor-pointer text-white px-4 py-2 rounded mt-4 hover:bg-red-800 block mx-auto transtiion-colors duration-300"
          onClick={() => setShowMore(!showMore)}
        >
          Mostrar {showMore ? "menos" : "más"}
        </button>
      </section>
    </div>
  );
}
