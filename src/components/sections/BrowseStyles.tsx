import Image from "next/image";
import { STYLES } from "@/lib/content";
import { ArrowRightIcon } from "@/components/icons";

export function BrowseStyles() {
  return (
    <section id="styles" className="py-14 md:py-20 bg-[var(--an-sand)]">
      <div className="container-gp">
        <div className="text-center">
          <p className="pill-badge">Browse by Style</p>
          <h2 className="font-display text-[32px] md:text-[48px] font-medium mt-4 leading-[1.08]">
            Find your <em className="italic text-[var(--an-gold)]">look</em>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-10">
          {STYLES.map((s) => (
            <a key={s.name} href="#shop" className="group block">
              <div className="relative aspect-[4/5] rounded-[10px] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
              </div>
              <h3 className="font-display text-[20px] md:text-[24px] font-semibold mt-3">
                {s.name}
              </h3>
              <p className="text-[12px] opacity-60 mt-0.5">{s.blurb}</p>
              <span className="mt-2 inline-flex items-center gap-1.5 uppercase text-[11px] tracking-[0.14em] font-semibold text-[var(--an-ink)]/80 group-hover:text-[var(--an-gold)] transition-colors">
                View More <ArrowRightIcon className="w-3.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
