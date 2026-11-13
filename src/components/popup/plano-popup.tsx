import { useEffect, useRef } from "react";
import masterplanImageH from "@/assets/images/plano-conjunto.png";
import AlunaIcon from "@/assets/icons/components/aluna-icon";
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll";
import CloseIcon from "@/assets/icons/components/close-icon";

type PlanoPopupProps = {
  onClose: () => void;
};

const modelos = [
  { id: "aluna-70-plus", label: "Aluna 70 Plus", color: "text-[#D9F5B5]" },
  { id: "aluna-90", label: "Aluna 90", color: "text-[#7FBF86]" },
  { id: "aluna-100", label: "Aluna 100", color: "text-[#E46B50]" },
];

export default function PlanoPopup({ onClose }: PlanoPopupProps) {
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

  // zoom de imagen
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    imgRef.current?.style.setProperty("transform-origin", `${x}% ${y}%`);
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="plano-popup-title"
      // tecla Escape
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      // clic en el fondo oscuro
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 m-auto aspect-[4/3] w-[min(92vw,calc(85svh*4/3))] max-h-none max-w-none overflow-hidden bg-proposito p-0 backdrop:bg-black/60 backdrop:backdrop-blur-sm sm:aspect-video sm:w-[min(92vw,1200px,calc(85svh*16/9))]"
    >
      <div className="relative flex h-full w-full flex-col gap-3 px-4 pb-4 pt-14 sm:gap-6 sm:px-8 sm:pb-8 sm:pt-16 lg:px-12 lg:pb-10">
        {/* título solo para lectores de pantalla */}
        <h2 id="plano-popup-title" className="sr-only">
          Plano de conjunto
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

        {/* plano */}
        <div
          onMouseMove={handleMouseMove}
          className="group relative min-h-0 flex-1 cursor-zoom-in overflow-hidden"
        >
          <img
            ref={imgRef}
            src={masterplanImageH}
            alt="Plano de conjunto del desarrollo con la ubicación de los lotes por modelo de casa"
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[2]"
          />
        </div>

        {/* simbología */}
        <ul
          aria-label="Modelos de casa"
          className="flex flex-wrap gap-x-5 gap-y-1 sm:flex-col sm:gap-1 lg:gap-2"
        >
          {modelos.map((modelo) => (
            <li
              key={modelo.id}
              className={`flex items-center gap-[0.35em] text-[13px] font-bold uppercase leading-none sm:text-[18px] lg:text-[22px] ${modelo.color}`}
            >
              <AlunaIcon aria-hidden="true" className="h-[1.1em] w-auto" />
              {modelo.label}
            </li>
          ))}
        </ul>
      </div>
    </dialog>
  );
}
