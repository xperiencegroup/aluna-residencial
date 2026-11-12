import FillButton from "@/components/fill-button";
import { useSearchParams } from "react-router";

// horizontal
import masterplanImageH from "@/assets/images/plano-conjunto.png";
// vertical
// import masterplanImageV from "@/assets/images/materplan-background-v.jpg";

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

  return (
    <section className="flex flex-col justify-center items-center min-h-svh w-full bg-beige">
      {/* explora plano de conjunto */}
      <div className="relative flex w-full h-full justify-center items-center">
        <div className="relative flex w-full justify-center items-center max-w-[1280px] min-h-[340px]">
          {/* text */}
          <div className="flex flex-col justify-center items-center text-center gap-[13px]">
            <p className="subtitle text-proposito uppercase">
              <span className="font-bold italic">Explora aquí</span> los
              detalles del <br />
              <span className="font-bold italic">plano de conjunto</span>
            </p>

            {/* button */}
            <PillButton
              Icon={PlanoIcon}
              base="bg-beige border-proposito text-proposito"
              className="w-[204px]"
            >
              Plano de Conjunto
            </PillButton>
          </div>

          {/* image */}
          <div className="relative w-[825px] h-[275px]">
            <img
              src={masterplanImageH}
              alt="Plano de conjunto"
              className="absolute inset-0 w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="absolute bottom-[-1px] left-0 size-[260px] curva" />
      </div>

      {/* registrate y recorrido virtual */}
      <div className="relative flex justify-center items-center w-full min-h-[428px] rounded-tr-[80px]">
        {/* forma */}
        <img src={formaBackground} className="absolute inset-0 w-full h-full" />

        {/*  texts and button */}
        <div className="relative flex flex-col w-full h-full text-center gap-[50px] text-beige">
          <div className="flex flex-col gap-[20px]">
            <h2 className="hero-2 font-semibold">
              Regístrate y conoce{" "}
              <span className="font-extrabold italic">
                los detalles del plano de conjunto
              </span>
            </h2>

            <p className="paragraph text-center">
              Un desarrollo residencial en Villa Nueva, Guatemala con una
              propuesta de vivienda horizontal dentro de condominio, <br />{" "}
              seguridad 24/7 y áreas verdes que invitan a la convivencia.
              <br />
              <br />
              El proyecto está conformado por 164 lotes y 3 modelos de casas que
              se adaptan a distintos estilos de vida.
              <br />
              <br />
              Disfruta de amenidades diseñadas para toda la familia y un entorno
              pensado para crecer, vivir y disfrutar.
            </p>
          </div>

          {/* button */}
          <div>
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
      </div>
    </section>
  );
}
