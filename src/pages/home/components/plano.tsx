import FillButton from "@/components/fill-button";
import { useSearchParams } from "react-router";

// horizontal
import masterplanImageH from "@/assets/images/plano-conjunto.png";
// vertical
import masterplanImageV from "@/assets/images/plano-conjunto-vertical.png";

import formaBackground from "@/assets/images/forma-plano-conjunto.svg";
import ClickIcon from "@/assets/icons/components/click-icon";
import AlunaIcon from "@/assets/icons/components/aluna-icon";
import PillButton from "@/components/pill-button";
import PlanoIcon from "@/assets/icons/components/plano-icon";

export default function PlanoConjunto() {
  const [, setSearchParams] = useSearchParams();

  const onRecorrido = () => {
    setSearchParams({ form: "xperience" }, { state: { origen: "plano" } });
  };

  const handleClickPlanoConjunto = () => {
    setSearchParams({ popup: "plano-conjunto" });
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-svh w-full bg-beige">
      {/* explora plano de conjunto */}
      <div className="relative flex w-full h-full justify-center items-center lg:grow">
        <div className="relative flex w-full max-w-[1280px] lg:min-h-[340px] min-h-svh flex-col items-center justify-center gap-8 py-12 lg:flex-row lg:py-0">
          {/* text */}
          <div className="flex flex-col items-center justify-center gap-[13px] text-center lg:shrink-0">
            <p className="subtitle text-proposito uppercase">
              <span className="font-bold italic">Explora aquí</span> los
              detalles del <br />
              <span className="font-bold italic">plano de conjunto</span>
            </p>

            {/* button */}
            <PillButton
              Icon={PlanoIcon}
              onClick={handleClickPlanoConjunto}
              base="bg-beige border-proposito text-proposito"
              className="w-[204px] xl:w-[220px]"
            >
              Plano de Conjunto
            </PillButton>
          </div>

          {/* image */}
          <div className="relative h-[60svh] w-[20svh] lg:h-auto lg:w-full lg:max-w-[825px] lg:aspect-[3/1]">
            <img
              src={masterplanImageH}
              alt="Plano de conjunto"
              className="max-lg:hidden absolute inset-0 w-full h-full object-contain"
            />
            <img
              src={masterplanImageV}
              alt="Plano de conjunto"
              className="lg:hidden absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-[-1px] left-0 size-[100px] lg:size-[180px] xl:size-[260px] curva" />
      </div>

      {/* registrate y recorrido virtual */}
      <div className="relative flex w-full min-h-[428px] items-center justify-center rounded-tr-[40px] px-6 py-16 max-lg:bg-proposito sm:rounded-tr-[60px] sm:px-10 md:px-16 lg:rounded-tr-[80px] lg:py-20">
        {/* forma */}
        <img
          src={formaBackground}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full select-none max-lg:hidden"
        />

        {/* texts and button */}
        <div className="relative flex w-full flex-col items-center gap-8 text-center text-beige md:gap-10 lg:gap-[50px]">
          <div className="flex flex-col gap-4 lg:gap-[20px]">
            <h2 className="hero-2 font-semibold text-balance">
              Regístrate y conoce{" "}
              <span className="font-extrabold italic">
                los detalles del plano de conjunto
              </span>
            </h2>

            <div className="paragraph mx-auto flex max-w-[880px] flex-col gap-4">
              <p>
                Un desarrollo residencial en{" "}
                <span className="font-semibold italic">
                  Villa Nueva, Guatemala
                </span>{" "}
                con una propuesta de vivienda horizontal dentro de condominio,
                seguridad 24/7 y áreas verdes que invitan a la convivencia.
              </p>
              <p>
                El proyecto está conformado por{" "}
                <span className="font-semibold italic">
                  164 lotes y 3 modelos de casas
                </span>{" "}
                que se adaptan a distintos estilos de vida.
              </p>
              <p>
                Disfruta de amenidades diseñadas para toda la familia y un
                entorno pensado para crecer, vivir y disfrutar.
              </p>
            </div>
          </div>

          {/* button */}
          <FillButton
            Icon={ClickIcon}
            gap={15}
            onClick={onRecorrido}
            variant="proposito"
          >
            <span className="flex items-center justify-center gap-[15px]">
              <AlunaIcon className="size-[20px]" aria-hidden="true" />
              <span>Iniciar Recorrido Virtual</span>
            </span>
          </FillButton>
        </div>
      </div>
    </section>
  );
}
