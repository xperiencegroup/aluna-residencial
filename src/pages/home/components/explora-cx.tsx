import FillButton from "@/components/fill-button";

// images
import imageBackground from "@/assets/images/explora-cx-background.jpg";
import logoDecoration from "@/assets/icons/logo-decoration-explora.svg";

// icons
import AlunaIcon from "@/assets/icons/components/aluna-icon";
import ClickIcon from "@/assets/icons/components/click-icon";
import { useSearchParams } from "react-router";

export default function ExploraCX() {
  const [, setSearchParams] = useSearchParams();

  const ORIGEN = "explora";

  const onRecorrido = () => {
    setSearchParams({ form: "xperience" }, { state: { origen: ORIGEN } });
  };
  return (
    <div
      id="xperiencia"
      className="relative w-full portrait:min-h-[max(100svh,800px)] min-h-svh overflow-hidden"
    >
      {/* bg image */}
      <img
        src={imageBackground}
        alt="Interior modelo Senderos de Aluna"
        className="absolute inset-0 w-full h-full object-cover object-right-top scale-150 origin-[60%_20%]"
      />

      {/* overlay */}
      <div className="lg:hidden absolute w-full h-full inset-0 bg-white/20" />

      {/* logo decoration */}
      <img
        src={logoDecoration}
        alt="Decoración"
        className="absolute -right-40 -top-40 max-lg:hidden"
      />

      {/* content */}
      <div className="relative z-10 w-full h-full px-[84px] max-lg:px-[20px] md:max-lg:px-[48px]">
        <div className="flex flex-col w-full max-w-[800px] h-[408px] py-[52px] gap-[30px] max-lg:h-auto max-lg:py-[56px]">
          {/* title */}
          <h2 className="hero max-md:text-[34px]">
            <span className="font-semibold text-proposito">Explora</span>{" "}
            <br className="sm:hidden" />
            <span className="font-extrabold italic text-proposito">
              Click and Xperience
            </span>
          </h2>

          {/* description */}
          <p className="regular text-proposito w-full max-w-[740px]">
            <span className="font-semibold">
              Vive la experiencia antes de mudarte.
            </span>
            <br />
            Recorre cada espacio de nuestros modelos desde cualquier lugar y en
            cualquier momento. Con{" "}
            <span className="font-semibold">Click and Xperience</span> podrás
            explorar el interior y exterior de tu futuro hogar, conocer la
            distribución real y visualizar cada detalle antes de tomar tu
            decisión.
          </p>

          {/* button */}
          <div>
            <FillButton
              Icon={ClickIcon}
              gap={15}
              onClick={onRecorrido}
              variant="beige"
            >
              <span className="flex items-center justify-center gap-[15px]">
                <AlunaIcon className="size-[20px]" aria-hidden="true" />
                <span>Iniciar Recorrido Virtual</span>
              </span>
            </FillButton>
          </div>
        </div>
      </div>
    </div>
  );
}
