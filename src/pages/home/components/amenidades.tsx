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
import { useSearchParams } from "react-router";

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
  const [, setSearchParams] = useSearchParams();

  const onSelect = (amenidad: Amenidad) => {
    if (amenidad.id === selected.id) return;
    setSelected(amenidad);
  };

  const onRecorrido = () => {
    setSearchParams({ form: "xperience" }, { state: { origen: "brochure" } });
  };
  return (
    <section className="flex w-full justify-center px-6 py-16 sm:px-10 md:px-16 lg:min-h-svh lg:items-center lg:py-20">
      <div className="flex w-full max-w-7xl flex-col items-start gap-6 lg:items-end lg:gap-[30px]">
        {/* title */}
        <h2 className="hero font-semibold text-proposito">Amenidades</h2>

        {/* description */}
        <p className="paragraph text-proposito">
          Disfruta de espacios que inspiran comunidad y bienestar:
        </p>

        {/* botones sm en adelante */}
        <ul className="max-sm:hidden flex justify-end flex-wrap gap-2">
          {amenidades.map((amenidad) => (
            <li key={amenidad.id} className="max-xl:shrink-0 max-xl:snap-start">
              <PillButton
                Icon={amenidad.Icon}
                current={selected.id === amenidad.id}
                onClick={() => onSelect(amenidad)}
                base="bg-beige border-proposito text-proposito"
                className="w-[200px] whitespace-nowrap"
              >
                {amenidad.label}
              </PillButton>
            </li>
          ))}
        </ul>

        {/* botones mobile */}
        <div className="flex flex-col items-center gap-3 self-center sm:hidden">
          <ul className="flex flex-wrap justify-center gap-[6px]">
            {amenidades.map((amenidad) => {
              const isSelected = selected.id === amenidad.id;

              return (
                <li key={amenidad.id}>
                  <button
                    type="button"
                    aria-label={amenidad.label}
                    aria-pressed={isSelected}
                    onClick={() => onSelect(amenidad)}
                    className="group flex size-[45px] items-center justify-center rounded-full border-[1.5px] border-proposito bg-beige drop-shadow transition-colors duration-200 hover:cursor-pointer hover:opacity-80 active:border-horizonte active:bg-proposito active:opacity-100 aria-pressed:border-horizonte aria-pressed:bg-proposito aria-pressed:opacity-100"
                  >
                    {amenidad.Icon && (
                      <amenidad.Icon
                        aria-hidden="true"
                        className="h-fit w-[23px] text-proposito group-active:text-horizonte group-aria-pressed:text-horizonte"
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* images */}
        <div className="grid w-full max-w-[1220px] gap-4 lg:grid-cols-[637fr_560fr] lg:gap-[22px]">
          {/* imagen mas grande */}
          <div className="relative aspect-[637/403] w-full overflow-hidden rounded-tl-[120px] bg-red-400 md:rounded-tl-[200px] lg:rounded-tl-[280px]">
            <img
              src=""
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {/* imagenes pequeñas */}
          <div className="grid gap-4 lg:grid-rows-[174fr_213fr]">
            {/* imagen mediana */}
            <div className="relative aspect-[16/7] w-full overflow-hidden bg-cyan-500 lg:aspect-auto">
              <img
                src=""
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* imagen pequeña 1 */}
              <div className="relative aspect-[272/213] overflow-hidden bg-green-700 lg:aspect-auto">
                <img
                  src=""
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              {/* imagen pequeña 2 */}
              <div className="relative aspect-[272/213] overflow-hidden bg-green-900 lg:aspect-auto">
                <img
                  src=""
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* download brochure */}
        <FillButton
          Icon={DownloadIcon}
          onClick={onRecorrido}
          variant="proposito"
        >
          Descargar Brochure
        </FillButton>
      </div>
    </section>
  );
}
