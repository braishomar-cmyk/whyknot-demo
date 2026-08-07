import { PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function WhatsAppFloat() {
  return (
    <a
      aria-label="Start planning on WhatsApp"
      href={PLAN_LINK}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[var(--an-wa)] text-white shadow-[0_8px_26px_rgba(31,179,85,0.45)] transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="w-[30px]" />
    </a>
  );
}
