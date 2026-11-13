import { useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  images: CarouselImage[];
  loop?: boolean;
  onSlideChange?: (index: number) => void;
  label?: string;
  className?: string;
};

export default function ImageCarousel({
  images,
  loop = false,
  onSlideChange,
  label = "Galería de imágenes",
  className = "",
}: ImageCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  // se guarda en un ref para no volver a suscribir los eventos en cada render
  const onSlideChangeRef = useRef(onSlideChange);
  onSlideChangeRef.current = onSlideChange;

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelected(index);
      onSlideChangeRef.current?.(index);
    };

    const onReInit = () => {
      setSnaps(emblaApi.scrollSnapList());
      onSelect();
    };

    onReInit();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onReInit);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onReInit);
    };
  }, [emblaApi]);

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      className={`flex w-full flex-col gap-[16px] ${className}`}
    >
      {/* imágenes */}
      <div ref={emblaRef} className="min-h-0 flex-1 overflow-hidden">
        <div className="flex h-full touch-pan-y">
          {images.map((image, index) => (
            <div
              key={image.src}
              role="group"
              aria-roledescription="imagen"
              aria-label={`${index + 1} de ${images.length}`}
              className="h-full min-w-0 flex-[0_0_100%]"
            >
              <img
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="block h-full w-full select-none object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      {snaps.length > 1 && (
        <div className="flex justify-center gap-[10px]">
          {snaps.map((_, index) => {
            const isSelected = index === selected;

            return (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
                aria-current={isSelected ? "true" : undefined}
                className="hover:cursor-pointer"
              >
                <span
                  className={`block size-[10px] rounded-full bg-beige transition-opacity duration-200 ${
                    isSelected ? "opacity-100" : "opacity-50"
                  }`}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
