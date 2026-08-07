import Image from "next/image";
import { PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function VideoBanner() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 text-center text-white">
      <Image
        src="/images/whyknot/capri-paisley-azure.jpg"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/55" />
      <div className="container-gp relative max-w-[640px]">
        <h2 className="font-display text-[32px] md:text-[52px] leading-[1.1] font-medium">
          Made to move with <em className="italic text-[var(--an-gold-light)]">ease</em>
        </h2>
        <p className="mt-5 text-[14.5px] text-white/80">
          Every piece is chosen to work as hard as you do. See something you like? It&apos;s two
          taps away.
        </p>
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            className="btn-solid !bg-white !text-[var(--an-ink)] hover:!bg-[var(--an-gold-light)]"
            href="#shop"
          >
            View All Pieces
          </a>
          <a className="btn-wa" href={PLAN_LINK} target="_blank" rel="noreferrer">
            <WhatsAppIcon className="w-4" /> Order on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
