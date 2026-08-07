import Image from "next/image";
import { PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

const STATS = [
  { value: "12+", label: "Years of craft" },
  { value: "5k+", label: "Pieces delivered" },
  { value: "100%", label: "Made with intent" },
];

export function BrandStory() {
  return (
    <section id="story" className="py-16 md:py-24 bg-[#1c1c1c] text-[var(--an-cream)]">
      <div className="container-gp grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="pill-badge !bg-white/5 !border-white/15 !text-[var(--an-gold-light)]">
            Our Story
          </p>
          <h2 className="font-display text-[30px] md:text-[46px] leading-[1.12] font-medium mt-5">
            Fashion that respects{" "}
            <em className="italic text-[var(--an-gold-light)]">the quiet</em> in every morning
          </h2>
          <p className="mt-6 text-[14.5px] leading-relaxed text-[var(--an-cream)]/70 max-w-[480px]">
            Atelier began with a simple belief: getting dressed should be the easiest decision of
            the day. We make a small number of pieces, make them well, and deliver them anywhere
            in Lebanon.
          </p>
          <div className="mt-8">
            <a className="btn-wa" href={PLAN_LINK} target="_blank" rel="noreferrer">
              <WhatsAppIcon className="w-4" /> Talk To Us
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 max-w-[440px]">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[30px] md:text-[38px] font-medium text-[var(--an-gold-light)] leading-none">
                  {s.value}
                </div>
                <div className="text-[11.5px] uppercase tracking-[0.1em] text-[var(--an-cream)]/60 mt-2">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden col-span-2 md:col-span-1 md:mt-10">
            <Image
              src="/images/fashion/story-fabric.jpg"
              alt="Draped sage wool fabric"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden hidden md:block">
            <Image
              src="/images/fashion/story-hangers.jpg"
              alt="Silk blouses on wooden hangers"
              fill
              sizes="25vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
