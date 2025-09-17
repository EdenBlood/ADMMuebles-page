import { testimonials } from "../storage";

export function Testimonials() {
  return (
    <div class="bg-red-900 p-2 md:p-4 my-4">
      <section class="max-w-7xl mx-auto flex flex-col gap-6 items-center p-8 w-full h-full">
        <h2 class="text-4xl md:text-5xl font-normal text-white text-center mb-2">
          Testimonios
        </h2>
        <p class="text-lg md:text-xl font-light text-slate-200 text-center max-w-2xl">
          Lo que nuestros clientes dicen sobre nosotros.
        </p>
        <div class="max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-4 py-4">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              class="bg-white p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <h3 class="text-xl font-semibold text-red-900 mb-2">
                {testimonial.author}
              </h3>
              <p class="text-gray-600 italic">"{testimonial.text}"</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
