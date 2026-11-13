import type { ComponentType, SVGProps } from "react";

import zonaEventos from "@/assets/icons/components/amenidades/eventos-icon";
import areaMascotas from "@/assets/icons/components/amenidades/mascotas-icon";
import canchaPolideportiva from "@/assets/icons/components/amenidades/cancha-icon";
import juegosInfantiles from "@/assets/icons/components/amenidades/juegos-icon";
import cicloviaInfantil from "@/assets/icons/components/amenidades/ciclovia-icon";
import churrasqueras from "@/assets/icons/components/amenidades/churrasqueras-icon";

// images -----------

// zona de eventos
import imageEventos1 from "@/assets/images/amenidades/eventos/1.jpg";
import imageEventos2 from "@/assets/images/amenidades/eventos/2.jpg";
import imageEventos3 from "@/assets/images/amenidades/eventos/3.jpg";
import imageEventos4 from "@/assets/images/amenidades/eventos/4.jpg";

// mascotas
import imageMascotas1 from "@/assets/images/amenidades/mascotas/1.jpg";
import imageMascotas2 from "@/assets/images/amenidades/mascotas/2.jpg";
import imageMascotas3 from "@/assets/images/amenidades/mascotas/3.jpg";
import imageMascotas4 from "@/assets/images/amenidades/mascotas/4.jpg";

// cancha (aqui hay 5 fotos y se utilizan 4)
import imageCancha1 from "@/assets/images/amenidades/cancha/1.jpg";
import imageCancha2 from "@/assets/images/amenidades/cancha/2.jpg";
import imageCancha3 from "@/assets/images/amenidades/cancha/3.jpg";
import imageCancha4 from "@/assets/images/amenidades/cancha/4.jpg";
// import imageCancha5 from "@/assets/images/amenidades/cancha/5.jpg";

// juegos
import imageJuegos1 from "@/assets/images/amenidades/juegos/1.jpg";
import imageJuegos2 from "@/assets/images/amenidades/juegos/2.jpg";
import imageJuegos3 from "@/assets/images/amenidades/juegos/3.jpg";
import imageJuegos4 from "@/assets/images/amenidades/juegos/4.jpg";

// ciclovia
import imageCiclovia1 from "@/assets/images/amenidades/ciclovia/1.jpg";
import imageCiclovia2 from "@/assets/images/amenidades/ciclovia/2.jpg";
import imageCiclovia3 from "@/assets/images/amenidades/ciclovia/3.jpg";
import imageCiclovia4 from "@/assets/images/amenidades/ciclovia/4.jpg";

// churrasqueras
import imageChurrasqueras1 from "@/assets/images/amenidades/churrasqueras/1.jpg";
import imageChurrasqueras2 from "@/assets/images/amenidades/churrasqueras/2.jpg";
import imageChurrasqueras3 from "@/assets/images/amenidades/churrasqueras/3.jpg";
import imageChurrasqueras4 from "@/assets/images/amenidades/churrasqueras/4.jpg";

export type Amenidad = {
  id: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  images: string[]; //orden de mas grande a mas pequeña
};

export const amenidades: Amenidad[] = [
  {
    id: "zona-eventos",
    label: "Zona de Eventos",
    Icon: zonaEventos,
    images: [imageEventos1, imageEventos2, imageEventos3, imageEventos4],
  },
  {
    id: "area-mascotas",
    label: "Área de Mascotas",
    Icon: areaMascotas,
    images: [imageMascotas1, imageMascotas2, imageMascotas3, imageMascotas4],
  },
  {
    id: "cancha-polideportiva",
    label: "Cancha Polideportiva",
    Icon: canchaPolideportiva,
    images: [imageCancha1, imageCancha2, imageCancha3, imageCancha4],
  },
  {
    id: "juegos-infantiles",
    label: "Juegos Infantiles",
    Icon: juegosInfantiles,
    images: [imageJuegos1, imageJuegos2, imageJuegos3, imageJuegos4],
  },
  {
    id: "ciclovia-infantil",
    label: "Ciclovía Infantil",
    Icon: cicloviaInfantil,
    images: [imageCiclovia1, imageCiclovia2, imageCiclovia3, imageCiclovia4],
  },
  {
    id: "churrasqueras",
    label: "Churrasqueras",
    Icon: churrasqueras,
    images: [
      imageChurrasqueras1,
      imageChurrasqueras2,
      imageChurrasqueras3,
      imageChurrasqueras4,
    ],
  },
];
