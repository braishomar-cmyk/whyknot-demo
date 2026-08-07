import { PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function BrandStory() {
  return (
    <section
      id="story"
      className="py-20 md:py-28 bg-[var(--an-ink)] text-[var(--an-cream)] text-center"
    >
      <div className="container-gp max-w-[760px]">
        <p className="uppercase text-[11px] tracking-[0.3em] font-semibold text-[var(--an-gold-light)]">
          Our Story
        </p>
        <h2 className="font-display text-[32px] md:text-[50px] leading-[1.12] font-medium mt-5">
          Fashion that respects{" "}
          <em className="italic text-[var(--an-gold-light)]">the quiet</em> in
          every morning
        </h2>
        <p className="mt-6 text-[14.5px] leading-relaxed text-[var(--an-cream)]/75 max-w-[540px] mx-auto">
          Atelier began with a simple belief: getting dressed should be the
          easiest decision of the day. We make a small number of pieces, make
          them well, and deliver them anywhere in Lebanon.
        </p>
        <div className="mt-8">
          <a
            className="btn-wa"
            href={PLAN_LINK}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon className="w-4" /> Talk To Us
          </a>
        </div>
      </div>
    </section>
  );
}
