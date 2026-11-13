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

  // bloquea el scroll del body mientras el popup está abierto
  useLockBodyScroll();

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
    /* overlay: clic fuera del panel cierra */
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="model-popup-title"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px] sm:p-6 lg:p-[32px] min-[1920px]:p-[48px]"
    >
      {/* panel */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-full w-full max-w-[560px] flex-col overflow-hidden bg-encuentro drop-shadow-xl lg:max-w-[1366px] min-[1440px]:max-w-[1500px] min-[1920px]:max-w-[1700px]"
      >
        {/* cerrar: fuera del área con scroll para que siempre esté visible */}
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="group absolute right-3 top-3 z-10 flex size-[44px] items-center justify-center rounded-full border-2 border-horizonte bg-proposito drop-shadow transition-colors duration-100 hover:cursor-pointer hover:opacity-60 active:border-proposito active:bg-horizonte active:opacity-100 sm:right-4 sm:top-4 lg:right-[24px] lg:top-[24px] min-[1440px]:size-[52px]"
        >
          <CloseIcon className="size-[20px] text-horizonte group-active:text-proposito min-[1440px]:size-[24px]" />
        </button>

        {/* área con scroll */}
        <div className="overflow-y-auto overscroll-contain px-5 pb-8 pt-[72px] sm:px-8 lg:px-[30px] lg:py-[min(48px,5svh)] min-[1440px]:px-[72px]">
          {/* content */}
          <div className="flex w-full flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-[30px]">
            {/* plantas */}
            <div className="aspect-[445/738] w-full max-w-[400px] shrink-0 lg:h-[min(738px,calc(100svh-160px))] lg:w-auto lg:max-w-none">
              <ImageCarousel
                key={modelo.id}
                className="h-full"
                label={`Plantas del ${modelo.label}`}
                images={modelo.niveles.map((nivel) => ({
                  src: nivel.plano,
                  alt: `Planta del ${nivel.titulo.toLowerCase()} del ${modelo.label}`,
                }))}
              />
            </div>

            {/* lista de características */}
            <div className="flex w-full grow flex-col gap-[20px] text-proposito">
              {/* title */}
              <h3 id="model-popup-title" className="hero font-semibold">
                {modelo.modalLabel}
              </h3>

              {/* description */}
              <p className="regular">{modelo.descripcion}</p>

              {/* niveles */}
              {modelo.niveles.map((nivel) => (
                <div key={nivel.titulo} className="flex flex-col gap-[5px]">
                  <h4 className="subtitle font-bold italic">{nivel.titulo}</h4>

                  <ul className="flex flex-col gap-[5px]">
                    {nivel.espacios.map((item, index) => (
                      <li key={index} className="flex items-center gap-[10px]">
                        {/* icon */}
                        <span className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-proposito">
                          <img
                            src={item.icon}
                            alt=""
                            aria-hidden="true"
                            className="size-[22px] object-contain"
                          />
                        </span>

                        {/* text */}
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
