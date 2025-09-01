import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const images = [
  "/muebles/mueble-1",
  "/muebles/mueble-2",
  "/muebles/mueble-3",
  "/muebles/mueble-4",
  "/muebles/mueble-5",
  "/muebles/mueble-6",
];

export function Carrousel() {
  return (
    <>
      <h1>ADMMuebles</h1>
      <section>
        <p>Bienvenido a ADMMuebles, tu tienda de muebles en línea.</p>

        <Swiper
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
        >
          {images.map((src, index) => (
            <SwiperSlide key={src}>
              <img src={src} alt={`Mueble ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
