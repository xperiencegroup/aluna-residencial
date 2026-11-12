import backgroundImage from "@/assets/images/historia-background.jpg";

// icons

export default function Historia() {
  return (
    <div
      id="cotizador"
      className="relative w-full min-h-svh overflow-hidden max-lg:min-h-0"
    >
      <div className="flex max-lg:flex-col max-lg:gap-0">
        {/* image */}
        <div className="relative shrink-0 w-full min-h-[50svh] max-xl:max-w-[580px] max-w-[50vw] rounded-br-[200px] overflow-hidden max-lg:max-w-none max-lg:min-h-0 max-lg:h-[240px] md:max-lg:h-[360px] max-lg:rounded-br-[120px]">
          <img
            src={backgroundImage}
            alt="Familia jugando futbol"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center items-center w-full min-h-svh px-[24px] py-[50px] lg:py-[34px] lg:px-[30px] max-lg:min-h-0 ">
          <div className="flex flex-col justify-between w-full max-w-[502px] h-fit max-lg:justify-start max-lg:gap-[15px] gap-[20px] max-lg:pt-0">
            {/* title */}
            <h2 className="hero-2 text-left text-proposito max-md:text-[30px]">
              <span className="font-semibold">Nuestra</span>{" "}
              <span className="font-extrabold italic">historia</span>
            </h2>

            {/* subtitle */}
            <p className="paragraph text-left text-proposito max-md:text-[17px]">
              En <span className="font-semibold italic">ALUNA Residencial</span>{" "}
              creemos en una nueva forma de habitar. No solo construimos casas,
              creamos comunidad, estabilidad y patrimonio real en Guatemala.
              <br />
              <br />
              Somos una alternativa digna frente al crecimiento vertical,
              ofreciendo espacios propios donde echar raíces, crecer y vivir en
              libertad.
              <br />
              <br />
              Con tres generaciones de experiencia y compromiso, caminamos a tu
              lado con honestidad y cercanía, porque tu patrimonio es más que
              una inversión - Es el legado que construyes para ti y los tuyos.
              <br />
              En ALUNA Residencial, habitar significa pertenecer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
