import { useState } from "react";

// icons
import FillButton from "@/components/fill-button";
import PillButton from "@/components/pill-button";
import DownloadIcon from "@/assets/icons/components/download-icon";
import { useSearchParams } from "react-router";

import { amenidades, type Amenidad } from "@/data/amenidades";
import { AnimatePresence, MotionConfig, motion } from "motion/react";
import { AmenidadImage } from "./amenidad-image/amenidad-image";

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

          {/* nombre de la amenidad seleccionada */}
          <div
            aria-live="polite"
            className="relative h-[1.5em] w-full overflow-hidden text-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={selected.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="subtitle font-semibold text-proposito"
              >
                {selected.label}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* images */}
        <MotionConfig reducedMotion="user">
          <div className="grid w-full max-w-[1220px] gap-4 lg:grid-cols-[637fr_560fr] lg:gap-[22px]">
            {/* imagen mas grande */}
            <div className="relative aspect-[637/403] w-full overflow-hidden rounded-tl-[120px] bg-proposito/10 md:rounded-tl-[200px] lg:rounded-tl-[280px]">
              <AmenidadImage
                src={selected.images[0]}
                alt={`${selected.label}, foto 1`}
              />
            </div>

            {/* imagenes pequeñas */}
            <div className="grid gap-4 lg:grid-rows-[174fr_213fr]">
              {/* imagen mediana */}
              <div className="relative aspect-[16/7] w-full overflow-hidden bg-proposito/10 lg:aspect-auto">
                <AmenidadImage
                  src={selected.images[1]}
                  alt={`${selected.label}, foto 2`}
                  delay={0.08}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* imagen pequeña 1 */}
                <div className="relative aspect-[272/213] overflow-hidden bg-proposito/10 lg:aspect-auto">
                  <AmenidadImage
                    src={selected.images[2]}
                    alt={`${selected.label}, foto 3`}
                    delay={0.16}
                  />
                </div>

                {/* imagen pequeña 2 */}
                <div className="relative aspect-[272/213] overflow-hidden bg-proposito/10 lg:aspect-auto">
                  <AmenidadImage
                    src={selected.images[3]}
                    alt={`${selected.label}, foto 4`}
                    delay={0.24}
                  />
                </div>
              </div>
            </div>
          </div>
        </MotionConfig>

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
