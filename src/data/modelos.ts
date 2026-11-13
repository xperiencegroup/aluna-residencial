// icons
import cocheIcon from "@/assets/icons/modelo/coche.svg";
import banoIcon from "@/assets/icons/modelo/bano.svg";
import estudioIcon from "@/assets/icons/modelo/estudio.svg";
import jardinIcon from "@/assets/icons/modelo/jardin.svg";
import lavanderiaIcon from "@/assets/icons/modelo/lavanderia.svg";
import salaIcon from "@/assets/icons/modelo/sala.svg";

// plantas
import A70P1 from "@/assets/images/modelos/70/ALUNA-70-PLANTA-01.jpg";
import A70P2 from "@/assets/images/modelos/70/ALUNA-70-PLANTA-02.jpg";
import A90P1 from "@/assets/images/modelos/90/ALUNA-90-PLANTA-01.jpg";
import A90P2 from "@/assets/images/modelos/90/ALUNA-90-PLANTA-02.jpg";
import A100P1 from "@/assets/images/modelos/100/ALUNA-100-PLANTA-01.jpg";
import A100P2 from "@/assets/images/modelos/100/ALUNA-100-PLANTA-02.jpg";

export type Espacio = {
  icon: string;
  label: string;
};

export type Nivel = {
  titulo: string;
  plano: string;
  espacios: Espacio[];
};

export type Modelo = {
  id: string;
  label: string;
  modalLabel: string;
  descripcion: string;
  niveles: Nivel[];
};

export const modelos: Modelo[] = [
  {
    id: "aluna-70",
    label: "Aluna 70",
    modalLabel: "Modelo 70",
    descripcion:
      "Modelo funcional y eficiente, ideal como primera inversión o para familias jóvenes.",
    niveles: [
      {
        titulo: "Primer nivel",
        plano: A70P1,
        espacios: [
          { icon: cocheIcon, label: "2 parqueos" },
          { icon: salaIcon, label: "Sala - Comedor - Cocina" },
          { icon: banoIcon, label: "Baño completo" },
          { icon: estudioIcon, label: "Estudio" },
          { icon: lavanderiaIcon, label: "Lavandería y pila" },
          { icon: jardinIcon, label: "Pasillo lateral con acceso al jardín" },
        ],
      },
      {
        titulo: "Segundo nivel",
        plano: A70P2,
        espacios: [
          { icon: estudioIcon, label: "2 dormitorios" },
          { icon: banoIcon, label: "Baño completo" },
        ],
      },
    ],
  },
  {
    id: "aluna-90",
    label: "Aluna 90",
    modalLabel: "Modelo 90",
    descripcion:
      "Un equilibrio entre amplitud y funcionalidad, ideal para familias en crecimiento o quienes requieren un espacio de trabajo en casa.",
    niveles: [
      {
        titulo: "Primer nivel",
        plano: A90P1,
        espacios: [
          { icon: cocheIcon, label: "2 parqueos" },
          { icon: salaIcon, label: "Sala - Comedor - Cocina" },
          { icon: banoIcon, label: "Baño completo" },
          { icon: estudioIcon, label: "Estudio / 4.º dormitorio" },
          { icon: estudioIcon, label: "Estudio" },
          { icon: lavanderiaIcon, label: "Lavandería" },
          { icon: jardinIcon, label: "Pasillo lateral con acceso al jardín" },
        ],
      },
      {
        titulo: "Segundo nivel",
        plano: A90P2,
        espacios: [
          { icon: estudioIcon, label: "3 dormitorios" },
          { icon: banoIcon, label: "Baño completo" },
        ],
      },
    ],
  },
  {
    id: "aluna-100",
    label: "Aluna 100",
    modalLabel: "Modelo 100",
    descripcion:
      "Modelo funcional y eficiente, ideal como primera inversión o para familias jóvenes.",
    niveles: [
      {
        titulo: "Primer nivel",
        plano: A100P1,
        espacios: [
          { icon: cocheIcon, label: "2 parqueos" },
          { icon: salaIcon, label: "Sala - Comedor - Cocina" },
          { icon: estudioIcon, label: "1 dormitorio" },
          { icon: banoIcon, label: "Baño completo" },
          { icon: lavanderiaIcon, label: "Lavandería y pila" },
          { icon: jardinIcon, label: "Jardín posterior" },
        ],
      },
      {
        titulo: "Segundo nivel",
        plano: A100P2,
        espacios: [
          { icon: estudioIcon, label: "3 dormitorios" },
          { icon: banoIcon, label: "2 baños completos" },
        ],
      },
    ],
  },
];
