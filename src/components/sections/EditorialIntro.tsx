export function EditorialIntro() {
  return (
    <section className="py-20 md:py-28 bg-[var(--an-cream)] text-center">
      <div className="container-gp max-w-[820px]">
        <p className="pill-badge">Featured This Season</p>
        <h2 className="font-display text-[36px] md:text-[58px] leading-[1.1] font-medium mt-5">
          Pieces made for <em className="italic text-[var(--an-gold)]">real days</em>
        </h2>
        <p className="mt-6 text-[15px] leading-relaxed opacity-75 max-w-[560px] mx-auto">
          Considered silhouettes for the woman who moves through the day on her
          own terms. Cut well, priced honestly, delivered to your door.
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
