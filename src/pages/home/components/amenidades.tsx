import { useState, type ComponentType, type SVGProps } from "react";

// icons
import zonaEventos from "@/assets/icons/components/amenidades/eventos-icon";
import areaMascotas from "@/assets/icons/components/amenidades/mascotas-icon";
import canchaPolideportiva from "@/assets/icons/components/amenidades/cancha-icon";
import juegosInfantiles from "@/assets/icons/components/amenidades/juegos-icon";
import cicloviaInfantil from "@/assets/icons/components/amenidades/ciclovia-icon";
import churrasqueras from "@/assets/icons/components/amenidades/churrasqueras-icon";
import FillButton from "@/components/fill-button";
import PillButton from "@/components/pill-button";
import DownloadIcon from "@/assets/icons/components/download-icon";

type Amenidad = {
  id: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const amenidades: Amenidad[] = [
  { id: "zona-eventos", label: "Zona de Eventos", Icon: zonaEventos },
  { id: "area-mascotas", label: "Área de Mascotas", Icon: areaMascotas },
  {
    id: "cancha-polideportiva",
    label: "Cancha Polideportiva",
    Icon: canchaPolideportiva,
  },
  {
    id: "juegos-infantiles",
    label: "Juegos Infantiles",
    Icon: juegosInfantiles,
  },
  {
    id: "ciclovia-infantil",
    label: "Ciclovía Infantil",
    Icon: cicloviaInfantil,
  },
  { id: "churrasqueras", label: "Churrasqueras", Icon: churrasqueras },
];

export default function Amenidades() {
  const [selected, setSelected] = useState(amenidades[0]);

  const onSelect = (amenidad: Amenidad) => {
    if (amenidad.id === selected.id) return;
    setSelected(amenidad);
  };
  return (
    <section className="flex justify-center items-center w-full min-h-svh gap-[30px]">
      <div className="flex flex-col items-end w-full max-w-7xl gap-[30px]">
        {/* title */}
        <h2 className="hero font-semibold text-proposito">Amenidades</h2>

        {/* description */}
        <p className="paragraph text-proposito">
          Disfruta de espacios que inspiran comunidad y bienestar:
        </p>

        {/* buttons */}
        <div className="flex justify-between w-full max-w-[1180px] gap-[8px]">
          {amenidades.map((amenidad) => {
            return (
              <div key={amenidad.id} className="w-full">
                <PillButton
                  Icon={amenidad.Icon}
                  current={selected.id === amenidad.id}
                  onClick={() => onSelect(amenidad)}
                  base="bg-beige border-proposito text-proposito"
                  className="w-full whitespace-nowrap"
                >
                  {amenidad.label}
                </PillButton>
              </div>
            );
          })}
        </div>

        {/* images */}
        <div className="flex w-full max-w-[1220px] gap-[22px]">
          {/* imagen mas grande */}
          <div className="relative w-[637px] h-[403px] rounded-tl-[280px] bg-red-400 overflow-hidden">
            <img
              src=""
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* imagenes pequeñas */}
          <div className="flex flex-col w-[560px] h-[430px] gap-[16px]">
            <div className="relative w-full h-[174px] bg-cyan-500">
              {/* imagen mediana */}
              <img
                src=""
                alt=""
                className="absolute w-full h-full inset-0 object-cover"
              />
            </div>

            <div className="flex w-full gap-[16px]">
              {/* imagen pequeña 1 */}
              <div className="relative w-[272px] h-[213px] bg-green-700">
                <img src="" alt="" className="absolute inset-0 w-full h-full" />
              </div>

              {/* imagen pequeña 2 */}
              <div className="relative w-[272px] h-[213px] bg-green-900">
                <img src="" alt="" className="absolute inset-0 w-full h-full" />
              </div>
            </div>
          </div>
        </div>

        {/* download brochure */}
        <FillButton Icon={DownloadIcon} variant="proposito">
          Descargar Brochure
        </FillButton>
      </div>
    </section>
  );
}
