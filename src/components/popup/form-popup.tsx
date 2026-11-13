import { useEffect, useRef } from "react";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import imageBackground from "@/assets/images/form-background.jpg";
import formaImage from "@/assets/images/fondo-forma-hero-encuentro.svg";
import isotipo from "@/assets/logos/main/isotipo.svg";
import XperienceForm from "../forms/xperience-form";
import CloseIcon from "@/assets/icons/components/close-icon";

type FormPopupProps = {
  onClose: () => void;
};

export default function FormPopup({ onClose }: FormPopupProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useLockBodyScroll();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (!dialog.open) dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="xperience-popup-title"
      // tecla Escape
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      // clic en el fondo oscuro
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 m-auto size-full max-h-none max-w-none overflow-hidden overscroll-contain bg-encuentro p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm lg:aspect-[16/9] lg:h-auto lg:w-[min(96vw,1440px,calc(94svh*16/9))] lg:overflow-visible"
    >
      <div className="relative flex h-full w-full flex-col overflow-y-auto overscroll-contain lg:overflow-visible">
        {/* título solo para lectores de pantalla; cuando el formulario tenga
            su título visible, ponle este id y borra este h2 */}
        <h2 id="xperience-popup-title" className="sr-only">
          Ingresa a nuestra plataforma interactiva
        </h2>

        {/* cerrar */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="group absolute right-3 top-3 z-10 flex size-[44px] items-center justify-center rounded-full border-2 border-horizonte bg-proposito drop-shadow transition-colors duration-100 hover:cursor-pointer hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-horizonte active:border-proposito active:bg-horizonte active:opacity-100 sm:right-4 sm:top-4 min-[1440px]:size-[52px]"
        >
          <CloseIcon className="size-[20px] text-horizonte group-active:text-proposito min-[1440px]:size-[24px]" />
        </button>

        {/* contenido */}
        <div className="flex w-full flex-1 max-lg:min-h-full max-lg:flex-col lg:overflow-hidden">
          {/* cuadro fijo */}
          <div className="relative flex-10 shrink-0 overflow-hidden rounded-br-[200px] max-lg:h-[240px] max-lg:flex-none max-lg:rounded-br-[100px]">
            {/* fondo */}
            <div className="absolute inset-0">
              <img
                src={imageBackground}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* forma */}
              <img
                src={formaImage}
                alt=""
                aria-hidden="true"
                className="absolute h-full w-full object-fill pr-[20px] max-lg:hidden"
              />

              {/* velo para legibilidad en móvil (sin la forma) */}
              <div className="absolute inset-0 bg-gradient-to-t from-beige via-beige/70 to-transparent lg:hidden" />
            </div>

            {/* contenido */}
            <div className="relative flex h-full w-full flex-col justify-end short:gap-[32px] max-lg:gap-[12px] lg:gap-[40px] xl:gap-[78px] short:pb-[32px] max-lg:pb-[20px] pb-[20px] lg:pl-[14px] xl:pl-[48px] max-lg:pl-[20px] md:max-lg:pl-[48px]">
              <img
                src={isotipo}
                alt="Isotipo Senderos de Aluna"
                className="absolute top-[55px] h-[75px] w-[38px] max-lg:top-[20px] max-lg:h-auto max-lg:w-[26px]"
              />

              <p className="regular text-proposito max-lg:hidden">
                Un proyecto de <br />
                <span className="font-semibold italic">Grupo MR2</span>
              </p>

              <div className="flex w-full max-w-[320px] flex-col gap-[25px] max-lg:gap-[10px]">
                <p className="hero font-extrabold italic text-proposito max-md:text-[34px]">
                  Bienvenido
                </p>

                <div className="h-[2px] w-full bg-proposito" />

                <p className="subtitle text-proposito max-lg:hidden">
                  Cuéntanos un poco de ti y{" "}
                  <span className="font-bold italic">Senderos de Aluna</span> se
                  adapta; modelos, planes y espacios pensados para tu familia
                </p>
              </div>
            </div>
          </div>

          {/* panel del formulario */}
          <div className="flex-10 shrink-0 max-lg:flex-none">
            <div className="flex h-full flex-col gap-[40px] px-[23px] pb-[56px] pt-[41px] short:gap-[16px] short:pb-[24px] short:pt-[24px] max-lg:gap-[28px] max-lg:px-[20px] max-lg:pb-[48px] max-lg:pt-[28px] md:max-lg:px-[48px]">
              <div className="flex w-full max-w-[640px] flex-1 flex-col justify-center">
                {/* formulario */}
                <XperienceForm onClose={onClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
}
