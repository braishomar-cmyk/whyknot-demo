import { TESTIMONIALS } from "@/lib/content";
import { StarIcon } from "@/components/icons";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--an-cream)]">
      <div className="container-gp">
        <div className="text-center">
          <p className="pill-badge">Client Love</p>
          <h2 className="font-display text-[32px] md:text-[48px] font-medium mt-4 leading-[1.08]">
            Worn on <em className="italic text-[var(--an-gold)]">repeat</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {TESTIMONIALS.map((t) => (
            <div key={t.who} className="bg-white rounded-[10px] p-7 border border-black/5">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-3.5 text-[var(--an-gold)]" />
                ))}
              </div>
              <p className="italic text-[13.5px] leading-relaxed opacity-80 mt-3">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 text-[13px] font-semibold">
                {t.who}
                <span className="block text-[10.5px] uppercase tracking-[0.14em] opacity-55 mt-0.5">
                  Verified Buyer
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
