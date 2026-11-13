import { useEffect, useRef } from "react";

import CloseIcon from "@/assets/icons/components/close-icon";

import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import ImageCarousel from "../carousel/image-carousel";
import type { Modelo } from "@/data/modelos";

interface ModelPopupProps {
  modelo: Modelo;
  onClose: () => void;
}

export default function ModelPopup({ modelo, onClose }: ModelPopupProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  useLockBodyScroll();

  // Bloquea el scroll del body mientras el popup está abierto
  useEffect(() => {
    const { overflow, paddingRight } = document.body.style;
    // evita el "salto" del layout al desaparecer la barra de scroll
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, []);

  // Escape cierra + el foco entra al popup y vuelve al elemento previo al cerrar
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return (
    /* overlay: clic fuera del panel cierra. En < lg el panel ocupa toda la pantalla */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="model-popup-title"
      className="fixed inset-0 z-[100] flex justify-center items-center p-[32px] min-[1920px]:p-[48px] bg-black/50 backdrop-blur-[2px] max-lg:p-0"
    >
      {/* close button < 1024px: esquina superior derecha del panel */}
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Cerrar"
        className="lg:hidden group absolute right-[24px] top-[24px] max-md:fixed max-md:right-[16px] max-md:top-[16px] z-10 flex size-[44px] min-[1440px]:size-[52px] justify-center items-center bg-proposito border-2 border-horizonte drop-shadow rounded-full transition-colors duration-100 hover:cursor-pointer hover:opacity-60 active:opacity-100 active:bg-horizonte active:border-proposito"
      >
        <CloseIcon className="size-[20px] min-[1440px]:size-[24px] text-horizonte group-active:text-proposito" />
      </button>

      {/* panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex items-center w-full max-w-[1366px] min-[1440px]:max-w-[1500px] min-[1920px]:max-w-[1700px] max-h-full max-lg:overflow-y-auto max-lg:overscroll-contain bg-encuentro px-[30px] min-[1440px]:px-[72px] py-[min(48px,5svh)] drop-shadow-xl max-lg:h-full max-lg:max-h-none max-lg:items-start max-lg:px-[20px] max-lg:pt-[72px] max-lg:pb-[48px] md:max-lg:px-[48px]"
      >
        {/* close button > 1024px: esquina superior derecha del panel */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Cerrar"
          className="max-lg:hidden group absolute right-[24px] top-[24px] max-md:fixed max-md:right-[16px] max-md:top-[16px] z-10 flex size-[44px] min-[1440px]:size-[52px] justify-center items-center bg-proposito border-2 border-horizonte drop-shadow rounded-full transition-colors duration-100 hover:cursor-pointer hover:opacity-60 active:opacity-100 active:bg-horizonte active:border-proposito"
        >
          <CloseIcon className="size-[20px] min-[1440px]:size-[24px] text-horizonte group-active:text-proposito" />
        </button>

        {/* content */}
        <div className="flex w-full justify-between items-center gap-[30px] max-lg:flex-col max-lg:items-stretch">
          <div className="w-[445px] h-[738px]">
            <ImageCarousel
              className="h-full"
              label={`Plantas del ${modelo.label}`}
              images={modelo.niveles.map((nivel) => ({
                src: nivel.plano,
                alt: `Planta del ${nivel.titulo.toLowerCase()} del ${modelo.label}`,
              }))}
            />
          </div>

          {/* lista de carateristicas */}
          <div className="grow flex flex-col gap-[20px] text-proposito">
            {/* title */}
            <h3 className="hero font-semibold">{modelo.modalLabel}</h3>

            {/* description */}
            <p className="regular">{modelo.descripcion}</p>

            {/* primer nivel */}
            <div className="flex flex-col gap-[5px]">
              <h4 className="subtitle font-bold italic">Primer Nivel</h4>
              <ul className="flex flex-col gap-[5px]">
                {modelo.niveles[0].espacios.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-[10px]">
                      {/* icon */}
                      <div className="relative flex justify-center items-center size-[40px] bg-proposito rounded-full">
                        <div className="size-[22px] relative">
                          <img
                            src={item.icon}
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* text */}
                      <p>{item.label}</p>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* segundo nivel */}
            <div className="flex flex-col gap-[5px]">
              <h4 className="subtitle font-bold italic">Segundo Nivel</h4>
              <ul className="flex flex-col gap-[5px]">
                {modelo.niveles[1].espacios.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-[10px]">
                      {/* icon */}
                      <div className="relative flex justify-center items-center size-[40px] bg-proposito rounded-full">
                        <div className="size-[22px] relative">
                          <img
                            src={item.icon}
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* text */}
                      <p>{item.label}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
