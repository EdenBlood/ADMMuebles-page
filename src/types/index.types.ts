export type MueblesGallery = {
  id: number;
  img: string;
  alt: string;
  title: string;
  description: string;
  category: string;
  materials: string[];
};

export type Colors =
  | "Blanco"
  | "Gris claro"
  | "Gris"
  | "Plata"
  | "Gris oscuro"
  | "Madera natural"
  | "Roble"
  | "Hickory"
  | "Hormigón"
  | "Nogal"
  | "Cerámico"
  | "Negro"
  | "Color plano"
  | "Gris Arcilla"
  | "Gris Macadán"
  | "Gris Sombra"
  | string;

export type MaterialsImagesRoute =
  | "/materiales/Chromix-blanco.webp"
  | "/materiales/Chromix-plata.webp"
  | "/materiales/Roble-Davos-natural.webp"
  | "/materiales/Roble-de-Nebraska-gris.webp"
  | "/materiales/Roble-de-Nebraska-natural.webp"
  | "/materiales/Hickory-natural.webp"
  | "/materiales/Hormigón-Chicago-gris-oscuro.webp"
  | "/materiales/Nogal-del-Pacífico-natural.webp"
  | "/materiales/Pietra-Grigia-negro.webp"
  | "/materiales/Blanco.webp"
  | "/materiales/Negro.webp"
  | "/materiales/Gris-arcilla.webp"
  | "/materiales/Gris-macadán.webp"
  | "/materiales/Gris-sombra.webp";

export type Materials = {
  id: number;
  img: MaterialsImagesRoute;
  color: Array<Colors>;
  alt: string;
  title: string;
};

export type LinksState = {
  instagram: string;
  instagramString: string;
  facebook: string;
  email: string;
  phone: string;
  locationString: string;
  phoneSpacing: string;
  whatsapp: string;
  location: string;
  website: string;
};
