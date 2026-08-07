export function EditorialIntro() {
  return (
    <section className="py-20 md:py-28 bg-[var(--an-cream)] text-center">
      <div className="container-gp max-w-[820px]">
        <p className="pill-badge">Curated, Not Mass-Produced</p>
        <h2 className="font-display text-[36px] md:text-[58px] leading-[1.1] font-medium mt-5">
          Pieces with <em className="italic text-[var(--an-gold)]">personality</em>
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed opacity-75 max-w-[560px] mx-auto">
          Small-batch finds from Italy and Japan, plus designs from our own collection. One-size
          cuts that flatter, colors that lift your mood, and nothing you&apos;ll see on everyone
          else.
        </p>
        <div className="mt-8">
          <a className="btn-outline" href="#shop">
            Explore The Collection
          </a>
        </div>
      </div>
    </section>
  );
}
