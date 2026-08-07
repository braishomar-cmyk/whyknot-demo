import Image from "next/image";
import { REELS, waLink } from "@/lib/content";
import { WhatsAppIcon } from "@/components/icons";

export function ReelsSection() {
  return (
    <section className="py-14 md:py-20 bg-[var(--an-cream)]">
      <div className="container-gp">
        <div className="text-center">
          <p className="pill-badge">Video Shopping</p>
          <h2 className="font-display text-[30px] md:text-[46px] font-medium mt-4 leading-[1.1]">
            Shop our <em className="italic text-[var(--an-gold)]">stories</em>
          </h2>
          <p className="mt-3 text-[14px] opacity-70">Tap a look, order it in the same minute.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-10">
          {REELS.map((r) => (
            <div
              key={r.product}
              className="group rounded-[12px] overflow-hidden bg-white shadow-[0_6px_24px_rgba(35,35,35,0.08)]"
            >
              <div className="relative aspect-[9/13] overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.product}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/85 backdrop-blur px-3 py-1 text-[9.5px] uppercase tracking-[0.16em] font-semibold text-[var(--an-ink)]">
                  {r.title}
                </span>
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/30 backdrop-blur transition-transform group-hover:scale-110">
                    <span className="ml-0.5 h-0 w-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-white" />
                  </span>
                </span>
              </div>
              <div className="flex items-center gap-2.5 p-3">
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12.5px] font-semibold">{r.product}</div>
                  <div className="text-[12px] opacity-60">{r.price}</div>
                </div>
                <a
                  aria-label={`Order ${r.product} on WhatsApp`}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--an-ink)] text-white transition-colors hover:bg-[var(--an-wa)]"
                  href={waLink(r.orderMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-[11.5px] opacity-50">
          Demo stills, replaced with the brand&apos;s real videos at launch.
        </p>
      </div>
    </section>
  );
}
