import WhatsappIcon from "@/assets/icons/components/whatsapp-icon";
import { SOCIAL_LINKS } from "@/const/nav-links";

export default function FloatingActions() {
  return (
    <div className="fixed z-10 bottom-[max(16px,env(safe-area-inset-bottom))] right-[max(16px,env(safe-area-inset-right))] sm:bottom-[max(24px,env(safe-area-inset-bottom))] sm:right-[max(24px,env(safe-area-inset-right))]">
      <a
        href={SOCIAL_LINKS[1].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="flex size-[44px] items-center justify-center rounded-full border border-beige bg-proposito"
      >
        <WhatsappIcon aria-hidden="true" className="size-[26px] text-beige" />
      </a>
    </div>
  );
}
