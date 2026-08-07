import { PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function VideoBanner() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 text-center text-white"
      style={{ background: "linear-gradient(120deg,#26211d,#4a3f36 60%,#6b5748)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(700px_340px_at_50%_-10%,rgba(217,195,163,0.25),transparent_60%)]" />
      <div className="container-gp relative max-w-[640px]">
        <h2 className="font-display text-[32px] md:text-[52px] leading-[1.1] font-medium">
          Made to move with ease
        </h2>
        <p className="mt-5 text-[14.5px] text-white/75">
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
