import { useSearchParams } from "react-router";
import ModeloCard from "./modelo-card/modelo-card";
import { modelos } from "@/data/modelos";
import { useMediaQuery } from "@/hooks/use-media-query";
import InfiniteCarousel from "@/components/carousel/infinite-carousel";

export default function Modelos() {
  const [params, setParams] = useSearchParams();

  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const abrirModelo = (modelo) => {
    setParams({ modelo: modelo.id });
  };
  return (
    <section
      id="modelos"
      className="relative flex flex-col justify-center items-center min-h-svh bg-proposito px-[83px] py-[48px] text-beige overflow-hidden max-lg:min-h-0 max-lg:px-[20px] max-lg:py-[56px] md:max-lg:px-[48px]"
    >
      {/* content */}
      <div className="relative mx-auto flex max-w-[1366px] flex-col items-center gap-[10px] sm:gap-[30px]">
        <header className="max-sm:w-full flex flex-col items-center gap-[30px]">
          <h2 className="text-[clamp(1.75rem,2.6vw,2.5rem)] min-[1440px]:text-[48px] min-[1920px]:text-[56px] font-medium leading-tight text-center">
            Tres modelos, <br className="sm:hidden" />
            <span className="font-semibold italic">nuevas posibilidades</span>
          </h2>
          <hr className="w-full sm:max-w-[573px] border-0 border-t-2 border-beige" />
        </header>

        <div className="flex flex-col gap-[16px] text-[clamp(0.85rem,1vw,1rem)] min-[1440px]:text-[18px] min-[1920px]:text-[20px] leading-relaxed">
          <p className="sm:text-center">
            En ALUNA Residencial sabemos que cada familia tiene su propia
            historia y necesidades.
            <br />
            Por eso, diseñamos tres modelos de casas con diferentes
            distribuciones y espacios, pensados para adaptarse a tu estilo de
            vida y acompañarte en cada etapa.
            <br />
            Explora nuestros modelos y descubre el espacio ideal para comenzar
            tu próxima historia.
          </p>
        </div>
      </div>

      {/* modelos */}
      <div className="relative flex mt-[40px] gap-[8px] xl:gap-[15px] min-[1440px]:gap-[24px] min-[1920px]:gap-[32px]">
        {/* models */}
        {isDesktop ? (
          <div className="relative flex mt-[40px] gap-[8px] xl:gap-[15px] min-[1440px]:gap-[24px] min-[1920px]:gap-[32px]">
            {modelos.map((modelo) => (
              <ModeloCard
                key={modelo.id}
                modelo={modelo}
                onOpen={abrirModelo}
              />
            ))}
          </div>
        ) : (
          <InfiniteCarousel
            paused={params.has("modelo")}
            className="mt-[24px] self-stretch -mx-[20px] md:-mx-[48px] py-[12px]"
            items={modelos.map((modelo) => (
              <div key={modelo.id} className="px-[8px]">
                <ModeloCard modelo={modelo} onOpen={abrirModelo} />
              </div>
            ))}
          />
        )}
      </div>
    </section>
  );
}
