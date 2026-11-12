import logoDecoration from "@/assets/icons/logo-decoration-cotiza.svg";

// icons
import FormularioCotiza from "@/components/formulario-cotiza";

export default function Cotiza() {
  return (
    <div
      id="cotizador"
      className="relative flex justify-center items-center w-full min-h-svh overflow-hidden max-lg:min-h-0"
    >
      {/* decoration */}
      <img
        src={logoDecoration}
        alt=""
        aria-hidden="true"
        className="absolute -bottom-4 -left-24 scale-115 max-lg:hidden"
      />

      {/* conoce el proyecto */}
      <div className="flex w-full max-w-7xl max-lg:flex-col max-lg:gap-0">
        <div className="flex flex-col justify-center items-center w-full min-h-svh px-[24px] py-[50px] lg:py-[34px] lg:px-[30px] max-lg:min-h-0">
          <div className="flex flex-col justify-between w-full max-w-[620px] min-[1440px]:max-w-[700px] min-[1920px]:max-w-[900px] h-full max-h-[660px] min-[1920px]:max-h-[820px] pt-[24px] max-lg:max-h-none max-lg:justify-start max-lg:gap-[15px] max-lg:pt-0">
            {/* title */}
            <h2 className="hero-2 text-center text-proposito max-md:text-[30px]">
              <span className="font-semibold">Cotiza</span>{" "}
              <span className="font-bold italic">tu casa</span>
            </h2>

            {/* subtitle */}
            <p className="subtitle text-center text-proposito max-md:text-[17px]">
              Déjanos tus datos y un asesor te compartirá precios, <br />{" "}
              modelos y disponibilidad.
            </p>

            {/* form */}
            <FormularioCotiza />
          </div>
        </div>

        {/* second text */}
        <div className="relative flex w-full items-center justify-center px-6 pb-16 pt-4 sm:px-10 lg:max-w-[580px] lg:shrink-0 lg:px-[30px] lg:py-[34px] xl:max-w-[42vw]">
          <div className="flex w-full max-w-[464px] flex-col gap-4 text-center text-proposito lg:gap-6 lg:text-right">
            <h3 className="subtitle font-bold italic text-balance">
              Conoce el rango de precios <br className="max-lg:hidden" />y
              opciones de inversión
            </h3>

            <div className="paragraph flex flex-col gap-4">
              <p>
                Ponemos a tu disposición la información preliminar de precios de
                cada modelo, así como las condiciones generales para que tengas
                una idea clara antes de dar el siguiente paso.
              </p>
              <p>
                Nuestros asesores te acompañarán para afinar la propuesta y
                presentarte un plan adaptado a tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
