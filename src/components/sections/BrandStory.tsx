import Image from "next/image";
import { PLAN_LINK } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

const STATS = [
  { value: "2", label: "Countries curated" },
  { value: "220+", label: "Looks shared" },
  { value: "100%", label: "Chosen with love" },
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
            Why dress <em className="italic text-[var(--an-gold-light)]">boring</em> when you
            could dress <em className="italic text-[var(--an-gold-light)]">you</em>?
          </h2>
          <p className="mt-6 text-[14.5px] leading-relaxed text-[var(--an-cream)]/70 max-w-[480px]">
            Whyknot started with a simple question: why dress boring? We hunt down small-batch
            pieces from Italy and Japan, add designs from our own collection, and deliver them
            anywhere in Lebanon. When a piece is gone, it&apos;s gone.
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
              src="/images/whyknot/green-shirt.jpg"
              alt="Kelly green cropped shirt"
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] rounded-[10px] overflow-hidden hidden md:block">
            <Image
              src="/images/whyknot/accessories-flatlay.jpg"
              alt="Colorful knit and woven accessories flat lay"
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
