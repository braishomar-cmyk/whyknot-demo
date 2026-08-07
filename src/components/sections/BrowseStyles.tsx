import { STYLES } from "@/lib/content";

export function BrowseStyles() {
  return (
    <section id="styles" className="py-16 md:py-20 bg-white">
      <div className="container-gp">
        <p className="text-center uppercase text-[11px] tracking-[0.3em] font-semibold text-[var(--an-gold)]">
          Browse by Style
        </p>
        <h2 className="section-heading mt-2">Find Your Look</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-10">
          {STYLES.map((s) => (
            <a
              key={s.name}
              href="#shop"
              className="group block relative aspect-[3/4] rounded-[6px] overflow-hidden"
            >
              <div
                className="absolute inset-0 transition-transform group-hover:scale-[1.03]"
                style={{ background: `linear-gradient(160deg, ${s.tone}, ${s.toneTo})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                <h3 className="font-display text-[22px] font-semibold">{s.name}</h3>
                <p className="text-[11.5px] opacity-80 mt-0.5">{s.blurb}</p>
                <span className="mt-2 inline-block uppercase text-[10px] tracking-[0.18em] font-semibold underline underline-offset-4 decoration-[var(--an-gold-light)]">
                  View More
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
