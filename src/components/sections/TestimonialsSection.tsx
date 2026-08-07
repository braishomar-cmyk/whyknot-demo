import { TESTIMONIALS } from "@/lib/content";
import { StarIcon } from "@/components/icons";

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-20 bg-[var(--an-cream)]">
      <div className="container-gp">
        <p className="text-center uppercase tracking-[0.3em] text-[11px] font-semibold text-[var(--an-gold)]">
          What They&apos;re Saying
        </p>
        <h2 className="section-heading mt-2">Worn On Repeat</h2>
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
