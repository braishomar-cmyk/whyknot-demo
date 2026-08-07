import { FAQS } from "@/lib/content";

export function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <div className="container-gp max-w-[780px]">
        <h2 className="section-heading">Questions, Answered</h2>
        <div className="mt-10">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group bg-[var(--an-cream)] rounded-[14px] mb-3 border border-black/5"
            >
              <summary className="cursor-pointer list-none px-6 py-5 flex items-center justify-between gap-4 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="font-display text-[22px] text-[var(--an-gold)] leading-none transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-5 text-[13.5px] leading-relaxed opacity-80">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
